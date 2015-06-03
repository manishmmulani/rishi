/*jslint node:true*/
/*jslint -W069*/
"use strict";

var queryGenerator = {

    /*
     * {
     * "measure" : [{key : x, value : y}],
     * "dimension" : [{key : x, value : y}],
     * "filter" : [{dimension_key : dimension_value}]
     * "action" : ["top 10"]
     * }
     */
    generateQuery : function (data_structure, noLimit) {
        console.log(JSON.stringify(data_structure));
        var filters = getQueryFilter(data_structure["filter"]);
        var allDimensions = [];
        allDimensions.push.apply(allDimensions, data_structure["dimension"]);
        allDimensions.push.apply(allDimensions, getAdditionalDimensions(data_structure["filter"]));

        data_structure["dimension"] = (allDimensions.length > 0 ? allDimensions : null);

        var queryGroup = getQueryGroup(allDimensions, data_structure["measure"]);
        console.log(filters);

        var query = [
        ];
        if (filters) {
            query.push({ "$match" : filters});
        }

        query.push({ "$group" : queryGroup });

        var topN = getTopN(data_structure["action"]);
        if (!noLimit && topN) {
            query.push({ "$limit" : topN});
        }
        console.log(JSON.stringify(query));
        return query;
    }
};

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

function getQueryGroup(dimensions, measures) {
    var result = {};

    var resultDimension = null;
    if (dimensions && dimensions.length > 0) {
        resultDimension = {};
        for (var i = 0; i < dimensions.length; i++) {
            var dimension = dimensions[i];

            resultDimension[dimension["key"]] = "$" + dimension["key"];
        }
    }

    result["_id"] = resultDimension;

    if (measures && measures.length > 0) {
        for (var j = 0; j < measures.length; j++) {
            var measure = measures[j];

            result[measure["key"]] = { "$sum" : "$" + measure["key"]};
        }
    }

    return result;
}

function getAdditionalDimensions(filters) {
    var additionalDimensions = [];
    if (filters && filters.length > 0) {
        var filtersByKey = groupFilterByKey(filters);

        for (var key in filtersByKey) {
            var filterArray = filtersByKey[key];
            if (filterArray.length > 1) {
                additionalDimensions.push({key : key});
            }
        }
    }
    return additionalDimensions;
}

function getQueryFilter(filters) {
    var resultFilter = null;
    console.log("filters : " + JSON.stringify(filters));
    if (filters && filters.length > 0) {
        var filtersByKey = groupFilterByKey(filters);

        resultFilter = {};
        for (var key in filtersByKey) {
            var filterArray = filtersByKey[key];
            if (filterArray.length > 1) {
                resultFilter[key] = {
                    "$in" : valueArray(filterArray)
                };
            }
            else {
                var filter = filterArray[0];

                if (!filter["action"] || (filter["action"] == "=")) {
                    resultFilter[filter["key"]] = filter["value"];
                }
                else if (filter["action"] == ">") {
                    resultFilter[filter["key"]] = { "$gt" : parseInt(filter["value"])};
                }
                else if (filter["action"] == "<") {
                    resultFilter[filter["key"]] = { "$lt" : parseInt(filter["value"])};
                }
            }
        }
    }
    console.log(JSON.stringify(resultFilter));
    return resultFilter;
}

function valueArray(filterArray) {
    var resultValueArray = [];
    for (var i = 0 ; i < filterArray.length ; i++) {
        resultValueArray.push(filterArray[i]["value"]);
    }
    return resultValueArray;
}

function groupFilterByKey(filters) {
    var groupedByKeys = {};
    if (filters && filters.length > 0) {

        for (var i = 0 ; i < filters.length; i++ ) {
            var filter = filters[i];
            var key = filter["key"];
            if (!(key in groupedByKeys)) {
                groupedByKeys[key] = [];
            }
            groupedByKeys[key].push(filter);
        }
    }
    return groupedByKeys;
}

var testInput = {
    "measure" : [{"key" : "risk", "value" : "CRASH"}],
    "dimension" : [{"key" : "codle", "value" : "codle"}, {"key" : "cosiness_unit", "value" : "BU"}],
    "filter" : [{"key" : "codle", "value" : "Equities"}, {"key" : "conl", "value" : "10000", "action" : ">"}],
    "action" : [{"key" : ">", "value" : "greater"}, {"key" : "top_10", "value" : "Top 10"}]
};

module.exports = queryGenerator;
