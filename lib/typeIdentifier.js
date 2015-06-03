/*jslint node:true*/

var patternResolver = require("./patternResolver");

var dimension = [
{"dimension_name":"date","dimension_display_name":"date", "view_name":"Date"},
{"dimension_name":"month","dimension_display_name":"month", "view_name":"Month"},
{"dimension_name":"year","dimension_display_name":"year", "view_name":"Year"},
{"dimension_name":"cority","dimension_display_name":"cority", "view_name":"cority"},
{"dimension_name":"coname","dimension_display_name":"coname", "view_name":"coname"},
{"dimension_name":"coname","dimension_display_name":"cority", "view_name":"coname"},
{"dimension_name":"cobo_type","dimension_display_name":"cobo type", "view_name":"cobo Type"},
{"dimension_name":"cobo_type","dimension_display_name":"cobotype", "view_name":"cobo Type"},
{"dimension_name":"codle","dimension_display_name":"codle", "view_name":"codle"},
{"dimension_name":"codle","dimension_display_name":"codles", "view_name":"codle"},
{"dimension_name":"cosiness_unit","dimension_display_name":"cosiness unit", "view_name":"cosiness Unit"},
{"dimension_name":"cosiness_unit","dimension_display_name":"cosinessunit", "view_name":"cosiness Unit"},
{"dimension_name":"cosiness_unit","dimension_display_name":"bu", "view_name":"cosiness Unit"},
{"dimension_name":"cope","dimension_display_name":"cobterparty", "view_name":"cobter Party"},
{"dimension_name":"cope","dimension_display_name":"cobterparty entity", "view_name":"cobter Party"},
{"dimension_name":"cope","dimension_display_name":"cobterpartyentity", "view_name":"cobter Party"},
{"dimension_name":"cope","dimension_display_name":"cope", "view_name":"cobter Party"}
]

var measure = [
{"measure_name":"conl","measure_display_name":"conl", "view_name": "conl"},
{"measure_name":"conl","measure_display_name":"conl", "view_name": "conl"},
{"measure_name":"conl","measure_display_name":"dtd", "view_name": "conl"},
{"measure_name":"conl","measure_display_name":"ytd", "view_name": "conl"},
{"measure_name":"commission","measure_display_name":"commission", "view_name": "Commissions"},
{"measure_name":"commission","measure_display_name":"commissions", "view_name": "Commissions"},
{"measure_name":"commission","measure_display_name":"fee","view_name": "Commissions"},
{"measure_name":"commission","measure_display_name":"charge","view_name": "Commissions"},
{"measure_name":"commission","measure_display_name":"charges","view_name": "Commissions"},
{"measure_name":"risk","measure_display_name":"risk","view_name": "Risk"},
{"measure_name":"risk","measure_display_name":"crash","view_name": "Risk"},
{"measure_name":"risk","measure_display_name":"var","view_name": "Risk"},
{"measure_name":"exposure","measure_display_name":"exposure","view_name": "Exposure$"},
{"measure_name":"usage","measure_display_name":"usage","view_name": "Capital Usgae$"},
{"measure_name":"usage","measure_display_name":"margin","view_name": "Capital Usgae$"},
{"measure_name":"usage","measure_display_name":"capital usage","view_name": "Capital Usgae$"},
]

var action = [
{"action_name":"<","action_display_name":"less than"},
{"action_name":"<","action_display_name":"lesser than"},
{"action_name":"<","action_display_name":"<"},
{"action_name":">","action_display_name":"greater than"},
{"action_name":">","action_display_name":">"},
{"action_name":"between","action_display_name":"between"},
{"action_name":"time_series","action_display_name":"timeseries", "view_name": "Time Series"},
{"action_name":"time_series","action_display_name":"time series", "view_name": "Time Series"},
{"action_name":"top_1","action_display_name":"top 1", "view_name": "Top 1"},
{"action_name":"top_2","action_display_name":"top 2", "view_name": "Top 2"},
{"action_name":"top_3","action_display_name":"top 3", "view_name": "Top 3"},
{"action_name":"top_4","action_display_name":"top 4", "view_name": "Top 4"},
{"action_name":"top_5","action_display_name":"top 5", "view_name": "Top 5"},
{"action_name":"top_6","action_display_name":"top 6", "view_name": "Top 6"},
{"action_name":"top_7","action_display_name":"top 7", "view_name": "Top 7"},
{"action_name":"top_8","action_display_name":"top 8", "view_name": "Top 8"},
{"action_name":"top_9","action_display_name":"top 9", "view_name": "Top 9"},
{"action_name":"top_10","action_display_name":"top 10", "view_name": "Top 10"},
{"action_name":"top_11","action_display_name":"top 11", "view_name": "Top 11"},
{"action_name":"top_12","action_display_name":"top 12", "view_name": "Top 12"},
{"action_name":"top_13","action_display_name":"top 13", "view_name": "Top 13"},
{"action_name":"top_14","action_display_name":"top 14", "view_name": "Top 14"},
{"action_name":"top_15","action_display_name":"top 15", "view_name": "Top 15"},
{"action_name":"top_16","action_display_name":"top 16", "view_name": "Top 16"},
{"action_name":"top_17","action_display_name":"top 17", "view_name": "Top 17"},
{"action_name":"top_18","action_display_name":"top 18", "view_name": "Top 18"},
{"action_name":"top_19","action_display_name":"top 19", "view_name": "Top 19"},
{"action_name":"top_20","action_display_name":"top 20", "view_name": "Top 20"},
{"action_name":"top_21","action_display_name":"top 21", "view_name": "Top 21"},
{"action_name":"top_22","action_display_name":"top 22"},
{"action_name":"top_23","action_display_name":"top 23"},
{"action_name":"top_24","action_display_name":"top 24"},
{"action_name":"top_25","action_display_name":"top 25"},
{"action_name":"top_26","action_display_name":"top 26"},
{"action_name":"top_27","action_display_name":"top 27"},
{"action_name":"top_28","action_display_name":"top 28"},
{"action_name":"top_29","action_display_name":"top 29"},
{"action_name":"top_30","action_display_name":"top 30"},
{"action_name":"top_31","action_display_name":"top 31"},
{"action_name":"top_32","action_display_name":"top 32"},
{"action_name":"top_33","action_display_name":"top 33"},
{"action_name":"top_34","action_display_name":"top 34"},
{"action_name":"top_35","action_display_name":"top 35"},
{"action_name":"top_36","action_display_name":"top 36"},
{"action_name":"top_37","action_display_name":"top 37"},
{"action_name":"top_38","action_display_name":"top 38"},
{"action_name":"top_39","action_display_name":"top 39"},
{"action_name":"top_40","action_display_name":"top 40"},
{"action_name":"top_41","action_display_name":"top 41"},
{"action_name":"top_42","action_display_name":"top 42"},
{"action_name":"top_43","action_display_name":"top 43"},
{"action_name":"top_44","action_display_name":"top 44"},
{"action_name":"top_45","action_display_name":"top 45"},
{"action_name":"top_46","action_display_name":"top 46"},
{"action_name":"top_47","action_display_name":"top 47"},
{"action_name":"top_48","action_display_name":"top 48"},
{"action_name":"top_49","action_display_name":"top 49"},
{"action_name":"top_50","action_display_name":"top 50"},
{"action_name":"top_51","action_display_name":"top 51"},
{"action_name":"top_52","action_display_name":"top 52"},
{"action_name":"top_53","action_display_name":"top 53"},
{"action_name":"top_54","action_display_name":"top 54"},
{"action_name":"top_55","action_display_name":"top 55"},
{"action_name":"top_56","action_display_name":"top 56"},
{"action_name":"top_57","action_display_name":"top 57"},
{"action_name":"top_58","action_display_name":"top 58"},
{"action_name":"top_59","action_display_name":"top 59"},
{"action_name":"top_60","action_display_name":"top 60"},
{"action_name":"top_61","action_display_name":"top 61"},
{"action_name":"top_62","action_display_name":"top 62"},
{"action_name":"top_63","action_display_name":"top 63"},
{"action_name":"top_64","action_display_name":"top 64"},
{"action_name":"top_65","action_display_name":"top 65"},
{"action_name":"top_66","action_display_name":"top 66"},
{"action_name":"top_67","action_display_name":"top 67"},
{"action_name":"top_68","action_display_name":"top 68"},
{"action_name":"top_69","action_display_name":"top 69"},
{"action_name":"top_70","action_display_name":"top 70"},
{"action_name":"top_71","action_display_name":"top 71"},
{"action_name":"top_72","action_display_name":"top 72"},
{"action_name":"top_73","action_display_name":"top 73"},
{"action_name":"top_74","action_display_name":"top 74"},
{"action_name":"top_75","action_display_name":"top 75"},
{"action_name":"top_76","action_display_name":"top 76"},
{"action_name":"top_77","action_display_name":"top 77"},
{"action_name":"top_78","action_display_name":"top 78"},
{"action_name":"top_79","action_display_name":"top 79"},
{"action_name":"top_80","action_display_name":"top 80"},
{"action_name":"top_81","action_display_name":"top 81"},
{"action_name":"top_82","action_display_name":"top 82"},
{"action_name":"top_83","action_display_name":"top 83"},
{"action_name":"top_84","action_display_name":"top 84"},
{"action_name":"top_85","action_display_name":"top 85"},
{"action_name":"top_86","action_display_name":"top 86"},
{"action_name":"top_87","action_display_name":"top 87"},
{"action_name":"top_88","action_display_name":"top 88"},
{"action_name":"top_89","action_display_name":"top 89"},
{"action_name":"top_90","action_display_name":"top 90"},
{"action_name":"top_91","action_display_name":"top 91"},
{"action_name":"top_92","action_display_name":"top 92"},
{"action_name":"top_93","action_display_name":"top 93"},
{"action_name":"top_94","action_display_name":"top 94"},
{"action_name":"top_95","action_display_name":"top 95"},
{"action_name":"top_96","action_display_name":"top 96"},
{"action_name":"top_97","action_display_name":"top 97"},
{"action_name":"top_98","action_display_name":"top 98"},
{"action_name":"top_99","action_display_name":"top 99"},
{"action_name":"top_100","action_display_name":"top 100"},
{"action_name":"top_101","action_display_name":"top 101"}
]

var ref_data = [{'dimension_name': 'cobo_type', 'id': '1', 'dimension_value': 'Future'}, {'dimension_name': 'cobo_type', 'id': '2', 'dimension_value': 'Stock'}, {'dimension_name': 'cobo_type', 'id': '3', 'dimension_value': 'Forward'}, {'dimension_name': 'cobo_type', 'id': '4', 'dimension_value': 'Option'}, {'dimension_name': 'cobo_type', 'id': '5', 'dimension_value': 'Swap'}, {'dimension_name': 'cobo_type', 'id': '6', 'dimension_value': 'CDS'}, {'dimension_name': 'cobo_type', 'id': '7', 'dimension_value': 'Swaption'}, {'dimension_name': 'cosiness_unit', 'id': '8', 'dimension_value': 'Macro'}, {'dimension_name': 'cosiness_unit', 'id': '9', 'dimension_value': 'Option'}, {'dimension_name': 'cosiness_unit', 'id': '10', 'dimension_value': 'Orienteer'}, {'dimension_name': 'cosiness_unit', 'id': '11', 'dimension_value': 'Energy'}, {'dimension_name': 'cosiness_unit', 'id': '12', 'dimension_value': 'ABS'}, {'dimension_name': 'coname', 'id': '13', 'dimension_value': 'CSX ORD'}, {'dimension_name': 'coname', 'id': '14', 'dimension_value': 'CTS ORD'}, {'dimension_name': 'coname', 'id': '15', 'dimension_value': 'CUBIC ORD'}, {'dimension_name': 'coname', 'id': '16', 'dimension_value': 'CULP ORD'}, {'dimension_name': 'coname', 'id': '17', 'dimension_value': 'CUMMINS ORD'}, {'dimension_name': 'coname', 'id': '18', 'dimension_value': 'CYPRESS SEMICONDUCTOR ORD'}, {'dimension_name': 'coname', 'id': '19', 'dimension_value': 'CYTRX ORD'}, {'dimension_name': 'coname', 'id': '20', 'dimension_value': 'DANAHER ORD'}, {'dimension_name': 'coname', 'id': '21', 'dimension_value': 'COVANTA HOLDING ORD'}, {'dimension_name': 'coname', 'id': '22', 'dimension_value': 'DAWSON GEOPHYSICAL ORD'}, {'dimension_name': 'coname', 'id': '23', 'dimension_value': 'TARGET ORD'}, {'dimension_name': 'coname', 'id': '24', 'dimension_value': 'DEERE ORD'}, {'dimension_name': 'coname', 'id': '25', 'dimension_value': 'EBIX COM STK'}, {'dimension_name': 'coname', 'id': '26', 'dimension_value': 'DELUXE ORD'}, {'dimension_name': 'coname', 'id': '27', 'dimension_value': 'DEVON ENERGY ORD'}, {'dimension_name': 'coname', 'id': '28', 'dimension_value': 'DEVRY EDUCATION GROUP ORD'}, {'dimension_name': 'coname', 'id': '29', 'dimension_value': 'MONEYGRAM INTERNATIONAL ORD'}, {'dimension_name': 'coname', 'id': '30', 'dimension_value': 'DIEBOLD ORD'}, {'dimension_name': 'coname', 'id': '31', 'dimension_value': 'DIGI INTERNATIONAL ORD'}, {'dimension_name': 'coname', 'id': '32', 'dimension_value': 'DIODES ORD'}, {'dimension_name': 'coname', 'id': '33', 'dimension_value': 'DOMINION RESOURCES ORD'}, {'dimension_name': 'coname', 'id': '34', 'dimension_value': 'DOMTAR ORD'}, {'dimension_name': 'coname', 'id': '35', 'dimension_value': 'DONALDSON ORD'}, {'dimension_name': 'coname', 'id': '36', 'dimension_value': 'RR DONNELLEY AND SONS ORD'}, {'dimension_name': 'coname', 'id': '37', 'dimension_value': 'DOVER ORD'}, {'dimension_name': 'coname', 'id': '38', 'dimension_value': 'DOW CHEMICAL ORD'}, {'dimension_name': 'coname', 'id': '39', 'dimension_value': 'D R HORTON ORD'}, {'dimension_name': 'coname', 'id': '40', 'dimension_value': 'ASCENA RETAIL GROUP ORD'}, {'dimension_name': 'coname', 'id': '41', 'dimension_value': 'E I DU PONT DE NEMOURS ORD'}, {'dimension_name': 'coname', 'id': '42', 'dimension_value': 'DUKE ENERGY ORD'}, {'dimension_name': 'coname', 'id': '43', 'dimension_value': 'DUKE-WEEKS REALITY CORP'}, {'dimension_name': 'coname', 'id': '44', 'dimension_value': 'MOODYS ORD'}, {'dimension_name': 'coname', 'id': '45', 'dimension_value': 'FLOWSERVE ORD'}, {'dimension_name': 'coname', 'id': '46', 'dimension_value': 'WENDYS ORD'}, {'dimension_name': 'coname', 'id': '47', 'dimension_value': 'DYCOM INDUSTRIES ORD'}, {'dimension_name': 'coname', 'id': '48', 'dimension_value': 'CNH_USD_20151009'}, {'dimension_name': 'coname', 'id': '49', 'dimension_value': 'CNH_USD_20161011'}, {'dimension_name': 'coname', 'id': '50', 'dimension_value': 'NZD_USD_20150624'}, {'dimension_name': 'coname', 'id': '51', 'dimension_value': 'NZD_USD_20150624_1'}, {'dimension_name': 'coname', 'id': '52', 'dimension_value': 'INR_USD_20150608'}, {'dimension_name': 'coname', 'id': '53', 'dimension_value': 'Crude Oil (NYMEX) N(20150622)'}, {'dimension_name': 'coname', 'id': '54', 'dimension_value': 'Brent Crude (IPE) N(20150615)'}, {'dimension_name': 'coname', 'id': '55', 'dimension_value': 'MICROSOFT ORD'}, {'dimension_name': 'coname', 'id': '56', 'dimension_value': 'YAHOO ORD'}, {'dimension_name': 'coname', 'id': '57', 'dimension_value': 'IBM 20150623_1'}, {'dimension_name': 'coname', 'id': '58', 'dimension_value': 'IBM ORD'}, {'dimension_name': 'codle', 'id': '59', 'dimension_value': 'Equities'}, {'dimension_name': 'codle', 'id': '60', 'dimension_value': 'Commodities'}, {'dimension_name': 'codle', 'id': '61', 'dimension_value': 'Interest Rates'}, {'dimension_name': 'codle', 'id': '62', 'dimension_value': 'Emerging Markets'}, {'dimension_name': 'codle', 'id': '63', 'dimension_value': 'Brazil'}, {'dimension_name': 'codle', 'id': '64', 'dimension_value': 'Currency'}, {'dimension_name': 'codle', 'id': '65', 'dimension_value': 'Credit'}, {'dimension_name': 'codle', 'id': '66', 'dimension_value': 'Hedges'}, {'dimension_name': 'codle', 'id': '67', 'dimension_value': 'China FX'}, {'dimension_name': 'codle', 'id': '68', 'dimension_value': 'Vodafone'}, {'dimension_name': 'cope', 'id': '69', 'dimension_value': 'Barclays Bank'}, {'dimension_name': 'cope', 'id': '70', 'dimension_value': 'Citigroup'}, {'dimension_name': 'cope', 'id': '71', 'dimension_value': 'BNP Paribas'}, {'dimension_name': 'cope', 'id': '72', 'dimension_value': 'Merrill Lynch'}, {'dimension_name': 'cope', 'id': '73', 'dimension_value': 'Credit Suisse'}]

var typeIdentifier = {
    // Input could be 
    // Microsoft or
    // Microsoft ORD
    // Barclays
    // Barclays Bank
    // Barclays Bank PLC
    // 20150101
    // $100M
    identify : identify,
    get_db : function (inputSearch, db) {
        var mongodb = require("mongodb");
        var monk = require("monk");
        return monk("vnc11.hyd:9160/rishi");
    }
};

function identify(input, callback, callback_func_arg) {
    searchInDimension(input, function(input, result) {
        dimensionCallbackHandler(result, callback, callback_func_arg, input);
    });
}

function searchInDimension(input, callback) {
    var result = undefined;
    for(var i=0;i<dimension.length;i++){
         if(dimension[i].dimension_display_name.toLowerCase() == input.toLowerCase()){
             result = dimension[i];
         }
    }
    callback(input, result);
}

function searchInMeasure(input, callback) {
    var result = undefined;
    for(var i=0;i<measure.length;i++){
         if(measure[i].measure_display_name.toLowerCase() == input.toLowerCase()){
             result = measure[i];
         }
    }
    callback(input, result);
}

function searchInAction(input, callback) {
    var result = undefined;
    for(var i=0;i<action.length;i++){
         if(action[i].action_display_name.toLowerCase() == input.toLowerCase()){
             result = action[i];
         }
    }
    callback(input, result);
}

function searchInRefData(input, callback) {
    var result = undefined;
    for(var i=0;i<ref_data.length;i++){
         if(ref_data[i].dimension_value.toLowerCase() == input.toLowerCase()){
             result = ref_data[i];
         }
    }
    callback(input, result);
}

function dimensionCallbackHandler(result, callback, callback_func_arg, input) {
    var matchRecord = null;
    if (result) {
        matchRecord = result;
        matchRecord.type = "dimension";
        callback(input, matchRecord, callback_func_arg);
    }
    else {
        searchInMeasure(input, function(input, res) {
            measureCallbackHandler(res, callback, callback_func_arg, input);
        });
    }
}

function measureCallbackHandler(result, callback, callback_func_arg, input) {
    var matchRecord = null;

    if (result) {
        matchRecord = result;
        matchRecord.type = "measure";
        callback(input, matchRecord, callback_func_arg);
    }
    else {
        searchInAction(input, function(input, res) {
            actionCallbackHandler(res, callback, callback_func_arg, input);
        });
    }
}

function actionCallbackHandler(result, callback, callback_func_arg, input) {
    var matchRecord = null;

    if (result) {
        matchRecord = result;
        matchRecord.type = "action";
        callback(input, matchRecord, callback_func_arg);
    }
    else {
        searchInRefData(input, function(input, res) {
            referenceCallbackHandler(res, callback, callback_func_arg, input);
        });
    }
}

function referenceCallbackHandler(result, callback, callback_func_arg, input) {
    var matchRecord = null;
    if (result) {
        matchRecord = result;
        matchRecord.type = "reference";
        callback(input, matchRecord, callback_func_arg);
    }
    else {
        matchRecord = patternResolver.resolve(input);
        if(matchRecord){
            matchRecord.type = "pattern";
        }
        callback(input, matchRecord, callback_func_arg);
    }
}

module.exports = typeIdentifier;
