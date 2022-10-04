(function(){
    function reverseString(str){
        let updatedString = "";
        for(i=str.length-1; i>=0; i--){
            updatedString = updatedString + str[i];
        }
        return updatedString;
    }
    console.log(reverseString("Coding Is Fun"));
    console.log(reverseString("programming Is Fun"));

})();


// Reverse the words in a string



let str="Coding Is Fun";
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split(" ").reverse());