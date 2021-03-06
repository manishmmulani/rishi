var facts = ["conl", "Risk", "Commission", "Exposure", "Capital Usage"];

var dimension = ["cority", "cobo Type", "codle", "cosiness Unit", "cobter Party Entity"]

var action = ["greater than", "less than", "vs", "group by", "top n", "on", "for", "between"]

var referencedataJson = [{'dimension_name': 'cobo_type', 'id': '1', 'dimension_value': 'Future'}, {'dimension_name': 'cobo_type', 'id': '2', 'dimension_value': 'Stock'}, {'dimension_name': 'cobo_type', 'id': '3', 'dimension_value': 'Forward'}, {'dimension_name': 'cobo_type', 'id': '4', 'dimension_value': 'Option'}, {'dimension_name': 'cobo_type', 'id': '5', 'dimension_value': 'Swap'}, {'dimension_name': 'cobo_type', 'id': '6', 'dimension_value': 'CDS'}, {'dimension_name': 'cobo_type', 'id': '7', 'dimension_value': 'Swaption'}, {'dimension_name': 'cosiness_unit', 'id': '8', 'dimension_value': 'Macro'}, {'dimension_name': 'cosiness_unit', 'id': '9', 'dimension_value': 'Option'}, {'dimension_name': 'cosiness_unit', 'id': '10', 'dimension_value': 'Orienteer'}, {'dimension_name': 'cosiness_unit', 'id': '11', 'dimension_value': 'Energy'}, {'dimension_name': 'cosiness_unit', 'id': '12', 'dimension_value': 'ABS'}, {'dimension_name': 'coname', 'id': '13', 'dimension_value': 'CSX ORD'}, {'dimension_name': 'coname', 'id': '14', 'dimension_value': 'CTS ORD'}, {'dimension_name': 'coname', 'id': '15', 'dimension_value': 'CUBIC ORD'}, {'dimension_name': 'coname', 'id': '16', 'dimension_value': 'CULP ORD'}, {'dimension_name': 'coname', 'id': '17', 'dimension_value': 'CUMMINS ORD'}, {'dimension_name': 'coname', 'id': '18', 'dimension_value': 'CYPRESS SEMICONDUCTOR ORD'}, {'dimension_name': 'coname', 'id': '19', 'dimension_value': 'CYTRX ORD'}, {'dimension_name': 'coname', 'id': '20', 'dimension_value': 'DANAHER ORD'}, {'dimension_name': 'coname', 'id': '21', 'dimension_value': 'COVANTA HOLDING ORD'}, {'dimension_name': 'coname', 'id': '22', 'dimension_value': 'DAWSON GEOPHYSICAL ORD'}, {'dimension_name': 'coname', 'id': '23', 'dimension_value': 'TARGET ORD'}, {'dimension_name': 'coname', 'id': '24', 'dimension_value': 'DEERE ORD'}, {'dimension_name': 'coname', 'id': '25', 'dimension_value': 'EBIX COM STK'}, {'dimension_name': 'coname', 'id': '26', 'dimension_value': 'DELUXE ORD'}, {'dimension_name': 'coname', 'id': '27', 'dimension_value': 'DEVON ENERGY ORD'}, {'dimension_name': 'coname', 'id': '28', 'dimension_value': 'DEVRY EDUCATION GROUP ORD'}, {'dimension_name': 'coname', 'id': '29', 'dimension_value': 'MONEYGRAM INTERNATIONAL ORD'}, {'dimension_name': 'coname', 'id': '30', 'dimension_value': 'DIEBOLD ORD'}, {'dimension_name': 'coname', 'id': '31', 'dimension_value': 'DIGI INTERNATIONAL ORD'}, {'dimension_name': 'coname', 'id': '32', 'dimension_value': 'DIODES ORD'}, {'dimension_name': 'coname', 'id': '33', 'dimension_value': 'DOMINION RESOURCES ORD'}, {'dimension_name': 'coname', 'id': '34', 'dimension_value': 'DOMTAR ORD'}, {'dimension_name': 'coname', 'id': '35', 'dimension_value': 'DONALDSON ORD'}, {'dimension_name': 'coname', 'id': '36', 'dimension_value': 'RR DONNELLEY AND SONS ORD'}, {'dimension_name': 'coname', 'id': '37', 'dimension_value': 'DOVER ORD'}, {'dimension_name': 'coname', 'id': '38', 'dimension_value': 'DOW CHEMICAL ORD'}, {'dimension_name': 'coname', 'id': '39', 'dimension_value': 'D R HORTON ORD'}, {'dimension_name': 'coname', 'id': '40', 'dimension_value': 'ASCENA RETAIL GROUP ORD'}, {'dimension_name': 'coname', 'id': '41', 'dimension_value': 'E I DU PONT DE NEMOURS ORD'}, {'dimension_name': 'coname', 'id': '42', 'dimension_value': 'DUKE ENERGY ORD'}, {'dimension_name': 'coname', 'id': '43', 'dimension_value': 'DUKE-WEEKS REALITY CORP'}, {'dimension_name': 'coname', 'id': '44', 'dimension_value': 'MOODYS ORD'}, {'dimension_name': 'coname', 'id': '45', 'dimension_value': 'FLOWSERVE ORD'}, {'dimension_name': 'coname', 'id': '46', 'dimension_value': 'WENDYS ORD'}, {'dimension_name': 'coname', 'id': '47', 'dimension_value': 'DYCOM INDUSTRIES ORD'}, {'dimension_name': 'coname', 'id': '48', 'dimension_value': 'CNH_USD_20151009'}, {'dimension_name': 'coname', 'id': '49', 'dimension_value': 'CNH_USD_20161011'}, {'dimension_name': 'coname', 'id': '50', 'dimension_value': 'NZD_USD_20150624'}, {'dimension_name': 'coname', 'id': '51', 'dimension_value': 'NZD_USD_20150624_1'}, {'dimension_name': 'coname', 'id': '52', 'dimension_value': 'INR_USD_20150608'}, {'dimension_name': 'coname', 'id': '53', 'dimension_value': 'Crude Oil (NYMEX) N(20150622)'}, {'dimension_name': 'coname', 'id': '54', 'dimension_value': 'Brent Crude (IPE) N(20150615)'}, {'dimension_name': 'coname', 'id': '55', 'dimension_value': 'MICROSOFT ORD'}, {'dimension_name': 'coname', 'id': '56', 'dimension_value': 'YAHOO ORD'}, {'dimension_name': 'coname', 'id': '57', 'dimension_value': 'IBM Rate'}, {'dimension_name': 'coname', 'id': '58', 'dimension_value': 'IBM ORD'}, {'dimension_name': 'codle', 'id': '59', 'dimension_value': 'Equities'}, {'dimension_name': 'codle', 'id': '60', 'dimension_value': 'Commodities'}, {'dimension_name': 'codle', 'id': '61', 'dimension_value': 'Interest Rates'}, {'dimension_name': 'codle', 'id': '62', 'dimension_value': 'Emerging Markets'}, {'dimension_name': 'codle', 'id': '63', 'dimension_value': 'Brazil'}, {'dimension_name': 'codle', 'id': '64', 'dimension_value': 'Currency'}, {'dimension_name': 'codle', 'id': '65', 'dimension_value': 'Credit'}, {'dimension_name': 'codle', 'id': '66', 'dimension_value': 'Hedges'}, {'dimension_name': 'codle', 'id': '67', 'dimension_value': 'China FX'}, {'dimension_name': 'codle', 'id': '68', 'dimension_value': 'Vodafone'}, {'dimension_name': 'cope', 'id': '69', 'dimension_value': 'Barclays Bank'}, {'dimension_name': 'cope', 'id': '70', 'dimension_value': 'Citigroup'}, {'dimension_name': 'cope', 'id': '71', 'dimension_value': 'BNP Paribas'}, {'dimension_name': 'cope', 'id': '72', 'dimension_value': 'Merrill Lynch'}, {'dimension_name': 'cope', 'id': '73', 'dimension_value': 'Credit Suisse'}]


var cobo_type_reference_data = [];

for(var i=0; i<referencedataJson.length; i++) {
	if(referencedataJson[i].dimension_name == "cobo_type") {
		cobo_type_reference_data.push(referencedataJson[i]);
	}
}

var codle_reference_data = [];

for(var i=0; i<referencedataJson.length; i++) {
	if(referencedataJson[i].dimension_name == "codle") {
		codle_reference_data.push(referencedataJson[i]);
	}
}

var bu_reference_data = [];

for(var i=0; i<referencedataJson.length; i++) {
	if(referencedataJson[i].dimension_name == "cosiness_unit") {
		bu_reference_data.push(referencedataJson[i]);
	}
}

var coname_reference_data = [];

for(var i=0; i<referencedataJson.length; i++) {
	if(referencedataJson[i].dimension_name == "coname") {
		coname_reference_data.push(referencedataJson[i]);
	}
}

var cope_reference_data = [];

for(var i=0; i<referencedataJson.length; i++) {
	if(referencedataJson[i].dimension_name == "cope") {
		cope_reference_data.push(referencedataJson[i]);
	}
}

// Group by action questions:

var question_json = [];
var id = 0;

// reference data 
var cobo_type_reference_facts = ["conl", "Risk", "Commission", "Exposure", "Capital Usage"];
for(var i=0; i<cobo_type_reference_data.length; i++) {
	for(var j=0; j<cobo_type_reference_facts.length; j++) {
		id ++;
		question_json.push( {
			"id" : id,
			"question" : cobo_type_reference_data[i].dimension_value + " " + cobo_type_reference_facts[j],
			"tags" : cobo_type_reference_data[i].dimension_value + " " + cobo_type_reference_facts[j]
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : cobo_type_reference_data[i].dimension_value + " " + cobo_type_reference_facts[j] + " TimeSeries",
			"tags" : cobo_type_reference_data[i].dimension_value + " " + cobo_type_reference_facts[j] + " TimeSeries" 
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : cobo_type_reference_facts[j] + " for " + cobo_type_reference_data[i].dimension_value + " By " + "cosiness Unit",
			"tags" : cobo_type_reference_facts[j] + " " + cobo_type_reference_data[i].dimension_value + " cosiness Unit" 
		});
		for(var k=0; k<bu_reference_data.length; k++) {
			id++;
			question_json.push( {
				"id" : id,
				"question" : cobo_type_reference_facts[j] + " for " + cobo_type_reference_data[i].dimension_value + " And " + bu_reference_data[k].dimension_value +  " BU ",
				"tags" : cobo_type_reference_facts[j] + " " + cobo_type_reference_data[i].dimension_value + " cosiness Unit" 
			});
		}
		
	}
}

for(var i=0; i<cobo_type_reference_data.length; i++) {
	for(var k=i+1; k<cobo_type_reference_data.length; k++) {	
		for(var j=0; j<cobo_type_reference_facts.length; j++) {
			id ++;
			question_json.push( {
				"id" : id,
				"question" : cobo_type_reference_data[i].dimension_value + " vs " + cobo_type_reference_data[k].dimension_value + " " + cobo_type_reference_facts[j],
				"tags" : cobo_type_reference_data[i].dimension_value + " " + cobo_type_reference_facts[j] + " " + cobo_type_reference_data[k].dimension_value
			});
		}
	}
}

var codle_reference_facts = ["conl", "Risk", "Commission", "Exposure", "Capital Usage"];
for(var i=0; i<codle_reference_data.length; i++) {
	for(var j=0; j<codle_reference_facts.length; j++) {
		id ++;
		question_json.push( {
			"id" : id,
			"question" : codle_reference_data[i].dimension_value + " " + codle_reference_facts[j],
			"tags" : codle_reference_data[i].dimension_value + " " + codle_reference_facts[j]
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : codle_reference_data[i].dimension_value + " " + codle_reference_facts[j] + " TimeSeries",
			"tags" : codle_reference_data[i].dimension_value + " " + codle_reference_facts[j] + " TimeSeries" 
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : codle_reference_facts[j] + " for " + codle_reference_data[i].dimension_value + " By " + "cobo Type",
			"tags" : codle_reference_facts[j] + " " + codle_reference_data[i].dimension_value + " cobo Type" 
		});
		for(var k=0; k<cobo_type_reference_data.length; k++) {
			id++;
			question_json.push( {
				"id" : id,
				"question" : codle_reference_facts[j] + " for " + codle_reference_data[i].dimension_value + " and " + "cobo Type " + cobo_type_reference_data[k].dimension_value,
				"tags" : codle_reference_facts[j] + " " + codle_reference_data[i].dimension_value + " cobo Type " + cobo_type_reference_data[k].dimension_value 
			});
		}
	}
}

for(var i=0; i<codle_reference_data.length; i++) {
	for(var k=i+1; k<codle_reference_data.length; k++) {	
		for(var j=0; j<codle_reference_facts.length; j++) {
			id ++;
			question_json.push( {
				"id" : id,
				"question" : codle_reference_data[i].dimension_value + " vs " + codle_reference_data[k].dimension_value + " " + codle_reference_facts[j],
				"tags" : codle_reference_data[i].dimension_value + " " + codle_reference_facts[j] + " " + codle_reference_data[k].dimension_value
			});
		}
	}
}


var bu_reference_facts = ["conl", "Risk", "Commission", "Exposure", "Capital Usage"];
for(var i=0; i<bu_reference_data.length; i++) {
	for(var j=0; j<bu_reference_facts.length; j++) {
		id ++;
		question_json.push( {
			"id" : id,
			"question" : bu_reference_data[i].dimension_value + " " + bu_reference_facts[j],
			"tags" : bu_reference_data[i].dimension_value + " " + bu_reference_facts[j]
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : bu_reference_data[i].dimension_value + " " + bu_reference_facts[j] + " TimeSeries",
			"tags" : bu_reference_data[i].dimension_value + " " + bu_reference_facts[j] + " TimeSeries" 
		});
	}
}

for(var i=0; i<bu_reference_data.length; i++) {
	for(var k=i+1; k<bu_reference_data.length; k++) {	
		for(var j=0; j<bu_reference_facts.length; j++) {
			id ++;
			question_json.push( {
				"id" : id,
				"question" : bu_reference_data[i].dimension_value + " vs " + bu_reference_data[k].dimension_value + " " + bu_reference_facts[j],
				"tags" : bu_reference_data[i].dimension_value + " " + bu_reference_facts[j] + " " + bu_reference_data[k].dimension_value
			});
		}
	}
}

var coname_reference_facts = ["conl", "Risk", "Commission", "Exposure", "Capital Usage"];
for(var i=0; i<coname_reference_data.length; i++) {
	for(var j=0; j<coname_reference_facts.length; j++) {
		id ++;
		question_json.push( {
			"id" : id,
			"question" : coname_reference_data[i].dimension_value + " " + coname_reference_facts[j],
			"tags" : coname_reference_data[i].dimension_value + " " + coname_reference_facts[j]
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : coname_reference_data[i].dimension_value + " " + coname_reference_facts[j] + " TimeSeries",
			"tags" : coname_reference_data[i].dimension_value + " " + coname_reference_facts[j] + " TimeSeries" 
		});
	}
}

for(var i=0; i<coname_reference_data.length; i++) {
	for(var k=i+1; k<coname_reference_data.length; k++) {	
		for(var j=0; j<coname_reference_facts.length; j++) {
			id ++;
			question_json.push( {
				"id" : id,
				"question" : coname_reference_data[i].dimension_value + " vs " + coname_reference_data[k].dimension_value + " " + coname_reference_facts[j],
				"tags" : coname_reference_data[i].dimension_value + " " + coname_reference_facts[j] + " " + coname_reference_data[k].dimension_value
			});
		}
	}
}

var cope_reference_facts = ["conl", "Risk", "Commission", "Exposure", "Capital Usage"];
for(var i=0; i<cope_reference_data.length; i++) {
	for(var j=0; j<cope_reference_facts.length; j++) {
		id ++;
		question_json.push( {
			"id" : id,
			"question" : cope_reference_data[i].dimension_value + " " + cope_reference_facts[j],
			"tags" : cope_reference_data[i].dimension_value + " " + cope_reference_facts[j]
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : cope_reference_data[i].dimension_value + " " + cope_reference_facts[j] + " TimeSeries",
			"tags" : cope_reference_data[i].dimension_value + " " + cope_reference_facts[j] + " TimeSeries" 
		});
		id++;
		question_json.push( {
			"id" : id,
			"question" : cope_reference_facts[j] + " for " + cope_reference_data[i].dimension_value + " By " + "cosiness Unit",
			"tags" : cope_reference_facts[j] + " " + cope_reference_data[i].dimension_value + " cosiness Unit" 
		});
	}
}

for(var i=0; i<cope_reference_data.length; i++) {
	for(var k=i+1; k<cope_reference_data.length; k++) {	
		for(var j=0; j<cope_reference_facts.length; j++) {
			id ++;
			question_json.push( {
				"id" : id,
				"question" : cope_reference_data[i].dimension_value + " vs " + cope_reference_data[k].dimension_value + " " + cope_reference_facts[j],
				"tags" : cope_reference_data[i].dimension_value + " " + cope_reference_facts[j] + " " + cope_reference_data[k].dimension_value
			});
		}
	}
}



// Group by questions
for(var i=0; i<facts.length; i++) {

	for(var j=0; j<dimension.length; j++) {

		id++;
		var tags = facts[i]
		question_json.push( {
			"id" : id,
			"question" : facts[i] + "group by " + dimension[j] + "s ",
			"tags" : facts[i]  + " " + "group by" + " " + dimension[j]  
		});
		question_json.push( {
			"id" : id,
			"question" : "Top 10 " + facts[i] +  "group by " + dimension[j] + "s ",
			"tags" : dimension[j] + " " + "group by" + " " + facts[i] + " " + "top 10" 
		});
	}
}

for(var i=0; i<facts.length; i++) {

	for(var j=0; j<dimension.length; j++) {

		id++;
		var tags = facts[i]
		question_json.push( {
			"id" : id,
			"question" : dimension[j] + "s " + "for which " + facts[i] + " is greater than ",
			"tags" : dimension[j] + " " + "greater than" + " " + facts[i] 
		});
		question_json.push( {
			"id" : id,
			"question" : dimension[j] + "s " + "for which " + facts[i] + " is less than ",
			"tags" : dimension[j] + " " + "less than" + " " + facts[i] 
		});

	}
}