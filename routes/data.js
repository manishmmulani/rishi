var express = require('express');
var router = express.Router();
var underscore = require("underscore");

var tokenGenerator = require("../lib/tokenGenerator");
var queryGenerator = require("../lib/queryGenerator");

/* GET home page. */
router.get('/', function(req, res) {
  var generator = new tokenGenerator();
  var dataStructure = generator.resolve(req.query["phrase"]);
  var query = queryGenerator.generateQuery(dataStructure);

  var alldatasets = req.db.get("alldatasets");

  alldatasets.col.aggregate(query , {}, function(e, jsonData) {

      var rishiAnswer = {
        "grid" : jsonData,
        "interpretation" : dataStructure,
        "text_interpretation" : text_interpretation(dataStructure)
      };

      console.log(JSON.stringify(text_interpretation(dataStructure)));

      if (!dateFilterPresent(dataStructure)) {
        timeseriesData(dataStructure, req, function(timeseries) {
          rishiAnswer["timeseries"] = timeseries;
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          res.json(rishiAnswer);
        });
      }
      else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.json(rishiAnswer);
      }
  });
});

function timeseriesData(structure, req, callback) {
  var dataStructure = underscore.clone(structure);

  var dimensions = dataStructure["dimension"];
  if (!dimensions) {
    dataStructure["dimension"] = [];
  }

  dataStructure["dimension"].push({"key" : "date", "value" : "date", "view_name" : "Date"});

  var query = queryGenerator.generateQuery(dataStructure, true);
  var alldatasets = req.db.get("alldatasets");

  alldatasets.col.aggregate(query , {}, function(e, jsonData) {
    jsonData.forEach(function(data) {
      data["_id"]["date"] = new Date(data["_id"]["date"]).getTime();
    });
    jsonData.sort(function(a, b) {
      return a["_id"]["date"] < b["_id"]["date"] ? -1 : a["_id"]["date"] > b["_id"]["date"] ? 1 : 0;
    });
    callback(jsonData);
  });
}

function dateFilterPresent(dataStructure) {
  var filters = dataStructure["filter"];
  if (filters) {
    for (var i = 0; i < filters.length; i++) {
      var filter = filters[i];
      if (filter["key"] == "date") {
        return true;
      }
    }
  }
}

function text_interpretation(dataStructure) {
  var measures = measureDimensionPart(dataStructure["measure"]);
  var dimensions = measureDimensionPart(dataStructure["dimension"]);
  var filterPart1 = filterPart(dataStructure["filter"]);

  return [actionPart(dataStructure["action"]), measures, filterPart1, (dimensions ? "by " + dimensions : "")];
}

function getTopN(actions) {
    if (actions && actions.length > 0) {
        for (var i = 0; i < actions.length; i++) {
            var action = actions[i]["key"];

            var pattern = /top.*\d+/i;
            if (pattern.test(action)) {
                return parseInt(action.match(/\d+/)[0]);
            }
        }
    }
    return null;
}

function actionPart(actions) {
  var topN = getTopN(actions);
  if(topN) {
    return "TOP " + topN;
  }
  return "";
}

function measureDimensionPart(measureDimension) {
  var array = [];
  if (measureDimension) {
    for (var i = 0; i < measureDimension.length; i++) {
      array.push(measureDimension[i]["view_name"]);
    }
  }
  return array.join(",");
}

function filterPart(filters) {
  var result = "";

  if (filters) {
    for (var i=0; i < filters.length; i++) {
      var filter = filters[i];

      if (filter["action"] && (filter["action"] == ">" || filter["action"] == "<")) {
        result = result + (filter["key"] + " " + filter["action"] + " " + filter["view_name"]);
      }
      else {
        result = result + filter["view_name"];
      }
      result = result + ",";
    }
  }
  return result;
}
module.exports = router;
