from datetime import date, timedelta as td
from random import randint
import json

# Below constants represents the static list of dimensions that we support
# along with their values

codleS  = ['Equities', 'Commodities', 'Interest Rates', 'Emerging Markets', 'Brazil', 
            'Currency', 'Credit', 'Hedges', 'China FX', 'Vodafone']
conameS = ['CSX ORD', 'CTS ORD','CUBIC ORD','CULP ORD','CUMMINS ORD', 'CYPRESS SEMICONDUCTOR ORD',
            'CYTRX ORD','DANAHER ORD','COVANTA HOLDING ORD','DAWSON GEOPHYSICAL ORD','TARGET ORD','DEERE ORD',
            'EBIX COM STK','DELUXE ORD','DEVON ENERGY ORD','DEVRY EDUCATION GROUP ORD','MONEYGRAM INTERNATIONAL ORD',
            'DIEBOLD ORD','DIGI INTERNATIONAL ORD','DIODES ORD','DOMINION RESOURCES ORD','DOMTAR ORD','DONALDSON ORD',
            'RR DONNELLEY AND SONS ORD','DOVER ORD','DOW CHEMICAL ORD','D R HORTON ORD','ASCENA RETAIL GROUP ORD',
            'E I DU PONT DE NEMOURS ORD','DUKE ENERGY ORD','DUKE-WEEKS REALITY CORP','MOODYS ORD','FLOWSERVE ORD',
            'WENDYS ORD','DYCOM INDUSTRIES ORD','CNH_USD_20151009','CNH_USD_20161011', 
            'NZD_USD_20150624','NZD_USD_20150624_1', 'INR_USD_20150608', 'Crude Oil (NYMEX) N(20150622)', 'Brent Crude (IPE) N(20150615)', 'MICROSOFT ORD', 'YAHOO ORD', 'IBM Rate', 'IBM ORD'
           ]
cobo_TYPES = ['Future', 'Stock', 'Forward', 'Option', 'Swap', 'CDS', 'Swaption']
cosiness_UNITS = ['Macro', 'Option', 'Orienteer', 'Energy', 'ABS']
copeS = ['Barclays Bank', 'Citigroup', 'BNP Paribas', 'Merrill Lynch', 'Credit Suisse']

codle_BU = {'Equities': 'Macro', 'Commodities': 'Energy', 'Interest Rates': 'Option', \
             'Emerging Markets': 'Macro', 'Brazil': 'ABS', 'Currency': 'Macro', 'Credit': 'Macro', \
             'Hedges': 'Macro', 'China FX': 'Orienteer', 'Vodafone': 'Macro'}
coname_cobo_TYPE = {'CNH_USD_20151009': 'Forward', 'CNH_USD_20161011': 'Forward', \
                    'NZD_USD_20150624': 'Future', 'NZD_USD_20150624_1': 'Future', \
                    'INR_USD_20150608': 'Forward', 'IBM Rate': 'Swap', \
                    'Crude Oil (NYMEX) N(20150622)': 'Forward'}

reference_data = {'codle' : codleS, 'coname' : conameS, \
                  'cobo_type' : cobo_TYPES, 'cosiness_unit' : cosiness_UNITS, 'cope' : copeS}

# Form reference data json
reference_json = []
id = 0
for key, value in reference_data.iteritems():
    for val in value:
        id = id + 1
        reference_json.append({'id' : str(id), 'dimension_value': val, 'dimension_name': key})
f = open('reference_data.json', 'w')
f.write(str(reference_json))
f.close()

# Form data table json
d1 = date(2015, 1, 1)
d2 = date(2015, 5, 31)
delta = d2 - d1
data_json = []
id = 0
for i in range(delta.days + 1):
    date_val  = str(d1 + td(days=i))
    year_val  = date_val.split("-")[0]
    month_val = date_val.split("-")[1]
    for codle in codleS:
        for coname in conameS:
            for cope in copeS:
                id = id + 1
                conl        = randint(500, 10000) * 1000
                commission = randint(1, 500) * 258
                risk       = randint(1000, 5000) * 434
                exposure   = randint(5000, 10000) * 2000
                usage      = randint(500, 1000) * 14567
                data_json.append({"date": date_val, "year":year_val, "month": month_val,\
                                  "codle": codle, "coname": coname, "cobo_type": coname_cobo_TYPE.get(coname, "Stock"), \
                                  "cosiness_unit": codle_BU[codle], "cope": cope, "conl": conl, "commission": commission, \
                                  "risk": risk, "exposure": exposure, "usage": usage})
test = str(data_json)
test = test.replace("'", '"')
f = open('alldatasets.json', 'w')
f.write(test)
f.close()
print id