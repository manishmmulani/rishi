var typeIdentifier = require("./typeIdentifier");

var queryGenerator = function() {
    this.tokens_info = {};
    var that = this;
    this.callback = function (input, matchRecord, callback) {
        if(matchRecord){
            that.tokens_info[input] = matchRecord
        }
    }
};

queryGenerator.prototype.resolve = function (inputSearch) {
    var inputSearchTrimmed = inputSearch.replace(/\s\s+/g, ' ');
    inputSearchTrimmed = inputSearchTrimmed.trim(); 
    this.inputSearchTrimmed = inputSearchTrimmed;
    
    
    var space_tokens = this.inputSearchTrimmed.split(' ');
    for(var i=0;i<=space_tokens.length-1;i++){
        for(var j=space_tokens.length-1;j>=i;j--){
            var searchStr = ''
            for(var k=i;k<=space_tokens.length-1;k++){
                if(k <= j){
                    searchStr = searchStr + (searchStr == '' ? '' : ' ') + space_tokens[k]
                }
            }
            var curr_token_length = Object.keys(this.tokens_info).length;
            typeIdentifier.identify(searchStr, this.callback);            
            var final_token_length = Object.keys(this.tokens_info).length;
            if(final_token_length > curr_token_length){
                i = j;
                break;
            }
        }
    }
    // Form the final output
    if(Object.keys(this.tokens_info).length != 0){
        var output_json = {}
        var tokenKeys = Object.keys(this.tokens_info);
        for(var i=0;i<=tokenKeys.length-1;i++){
            var tokenKeyJsonList = []
            var type = ((this.tokens_info[tokenKeys[i]].type == 'pattern' || this.tokens_info[tokenKeys[i]].type == 'reference')? 'filter': this.tokens_info[tokenKeys[i]].type)
            if(type in output_json){
                tokenKeyJsonList = output_json[type];
            }
            var tokenKeyJson = {}
            if(this.tokens_info[tokenKeys[i]].type == 'reference'){
                tokenKeyJson['key']   = this.tokens_info[tokenKeys[i]]['dimension_name'];
                tokenKeyJson['value'] = this.tokens_info[tokenKeys[i]]['dimension_value'];
                tokenKeyJson['view_name'] = ('view_name' in this.tokens_info[tokenKeys[i]] ? this.tokens_info[tokenKeys[i]]['view_name'] : this.tokens_info[tokenKeys[i]]['dimension_value']);
            }
            else if(this.tokens_info[tokenKeys[i]].type == 'pattern'){
                tokenKeyJson['key']   = this.tokens_info[tokenKeys[i]]['dimension_name'];
                tokenKeyJson['value'] = this.tokens_info[tokenKeys[i]]['dimension_value'];
                tokenKeyJson['view_name'] = ('view_name' in this.tokens_info[tokenKeys[i]] ? this.tokens_info[tokenKeys[i]]['view_name'] : this.tokens_info[tokenKeys[i]]['dimension_value']);
            }
            else if(this.tokens_info[tokenKeys[i]].type == 'dimension'){
                tokenKeyJson['key']   = this.tokens_info[tokenKeys[i]]['dimension_name'];
                tokenKeyJson['value'] = this.tokens_info[tokenKeys[i]]['dimension_display_name'];
                tokenKeyJson['view_name'] = ('view_name' in this.tokens_info[tokenKeys[i]] ? this.tokens_info[tokenKeys[i]]['view_name'] : this.tokens_info[tokenKeys[i]]['dimension_display_name']);
            }
            else if(this.tokens_info[tokenKeys[i]].type == 'action'){
                tokenKeyJson['key']   = this.tokens_info[tokenKeys[i]]['action_name'];
                tokenKeyJson['value'] = this.tokens_info[tokenKeys[i]]['action_display_name'];
                tokenKeyJson['view_name'] = ('view_name' in this.tokens_info[tokenKeys[i]] ? this.tokens_info[tokenKeys[i]]['view_name'] : this.tokens_info[tokenKeys[i]]['action_display_name']);
            }
            else if(this.tokens_info[tokenKeys[i]].type == 'measure'){
                tokenKeyJson['key']   = this.tokens_info[tokenKeys[i]]['measure_name'];
                tokenKeyJson['value'] = this.tokens_info[tokenKeys[i]]['measure_display_name'];
                tokenKeyJson['view_name'] = ('view_name' in this.tokens_info[tokenKeys[i]] ? this.tokens_info[tokenKeys[i]]['view_name'] : this.tokens_info[tokenKeys[i]]['measure_display_name']);
            }
            tokenKeyJsonList.push(tokenKeyJson)
            output_json[type] = tokenKeyJsonList
        }
        // Modify output to merge few entities
        if('filter' in output_json){
            var measureIndex = 0;
            var actionIndex = 0;
            for(var i=0;i<=output_json['filter'].length-1;i++){
                if(output_json['filter'][i]['key'] == 'number'){
                    if('measure' in output_json && (output_json['measure'].length > measureIndex)){
                        output_json['filter'][i]['key'] = output_json['measure'][measureIndex]['key'];
                        measureIndex = measureIndex + 1;
                    }
                    else{
                        output_json['filter'][i]['key'] = 'conl';
                    }
                    if('action' in output_json && (output_json['action'].length > actionIndex)){
                        output_json['filter'][i]['action'] = output_json['action'][actionIndex]['key'];
                        actionIndex = actionIndex + 1;
                    }
                    else{
                        output_json['filter'][i]['action'] = '=';
                    }
                }
            }
        }
        if(!('measure' in output_json)){
            var measureList = [];
            measureList.push({'key':'conl', 'value':'conl', 'view_name':'conl'});
            output_json['measure'] = measureList;
        }
    }
    return output_json;
}

//var queryG1 = new queryGenerator();
//queryG1.resolve('conl Jan 2015')
module.exports = queryGenerator;