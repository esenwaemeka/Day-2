'strict'
var file = {};
file.words = function(arg_str){
	var str_reg = arg_str.replace(/\s{1,}/, " "), i, wordCount={};
    var str_arr = str_reg.split(" ");
    i = 0;

    while (i<str_arr.length){
		if (typeof wordCount[str_arr[i]] === 'number'){
			wordCount[str_arr[i]]++;
		}
		else{
			wordCount[str_arr[i]] = 1;
		}
	    i++
	}
		return wordCount;
}

module.exports = file ;