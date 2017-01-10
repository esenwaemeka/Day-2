'strict'
var file ={}

file.reverseString = function(arg_s) {
  var rev_string = '', i;

  for (i = 0; i<arg_s.length; i++ ){
    rev_string = arg_s[i] + rev_string;
  }

  if (arg_s === ''){
    return null
  }

  else if (rev_string === arg_s){
    return true;
  }

  else{
    return rev_string;
  }
  
}
module.exports = file;
