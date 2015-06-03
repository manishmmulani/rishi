/*jslint node:true*/
"use strict";
var moment = require("moment");

var patternResolver = {
    resolve : function (input) {

        // Number - 100M, $200K
        // today, yesterday
        // 20150501, 2015/01/01, 05/01
        // Jan 2015
        var result = parseDate(input);
        if (!result) {
            result = parseNumber(input);
        }
        if (!result) {
            result = parseYear(input);
        }
        if (!result) {
            result = parseMonthYear(input);
        }
        return result;
    }
};

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function startsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}

function parseNumber(input) {
    var pattern = /\$?[\d,]+[K|M|k|m]?/g;

    var result = null;

    if (pattern.test(input)) {
        // removing all commas
        input = input.replace(/,/g, "");

        // removing $
        if (startsWith(input, "$")) {
            input = input.substring(1, input.length);
        }

        // replacing M with 1000000
        if (endsWith(input.toLowerCase(), "m")) {
            result =  parseInt(input.substring(0, input.length - 1)) * 1000000;
        }
        // replacing K with 1000
        else if (endsWith(input.toLowerCase(), "k")) {
            result = parseInt(input.substring(0, input.length - 1)) * 1000;
        }
        else {
            result = parseInt(input);
        }
    }

    if (result) {
        return {
            "dimension_name" : "number",
            "dimension_value" : result
        };
    }
    return null;
}

function parseYear(input) {
    var yearMoment = moment(input, "YYYY", "en", true);
    if (yearMoment.isValid()) {
        return {
            "dimension_name" : "year",
            "dimension_value" : yearMoment.year()
        };
    }
    return null;
}

/*
 * Jan 2015, Feb 2015
 * Jan, Feb
 * Note : assumption is we have data only for 2015
 */
function parseMonthYear(input) {
    var monthMoment1 = moment(input, "MMM YYYY", "en", true);
    var monthMoment2 = moment(input, "MMMM YYYY", "en", true);
    var monthMoment3 = moment(input, "MMM", "en", true);
    var monthMoment4 = moment(input, "MMMM", "en", true);

    if (monthMoment1.isValid()) {
        return {
                "dimension_name" : "month",
                "dimension_value" : (monthMoment1.month() + 1)
            };
    }
    if (monthMoment2.isValid()) {
        return {
                "dimension_name" : "month",
                "dimension_value" : (monthMoment2.month() + 1)
            };
    }
    if (monthMoment3.isValid()) {
        return {
                "dimension_name" : "month",
                "dimension_value" : (monthMoment3.month() + 1)
            };
    }
    if (monthMoment4.isValid()) {
        return {
                "dimension_name" : "month",
                "dimension_value" : (monthMoment4.month() + 1)
            };
    }

    return null;
}

/*
 * today, yesterday, 20150501, 2015-05-01, 05-01
 * TODO : today, yesterday
 */
function parseDate(input) {
    var resultDate = null;
    if (input.toLowerCase() === "today") {
        resultDate = formatDate();
    }

    if (!resultDate) {
        var dateMoment = moment(input, "YYYYMMDD", "en", true);
        if (dateMoment.isValid()) {
            resultDate = dateMoment.format("YYYYMMDD");
        }
    }
    if (!resultDate) {
        var dateMoment = moment(input, "YYYY-MM-DD", "en", true);
        if (dateMoment.isValid()) {
            resultDate = dateMoment.format("YYYY-MM-DD");
        }
    }

    if (resultDate) {
        return {
                    "dimension_name" : "date",
                    "dimension_value" : resultDate
        };
    }

    return null;
}

function formatDate() {
   var today = new Date();
   var yyyy = today.getFullYear().toString();
   var mm = (today.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = today.getDate().toString();
   return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); // padding
}

module.exports = patternResolver;