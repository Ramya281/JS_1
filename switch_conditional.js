(function() {
    function numberCheck(num){
        switch (true) {
            case num > 0:
                return "Positive Number";
                
            case num < 0:
                return "Negative Number";
                    
        
            default:
                return "zero";
        }
    
    }
    console.log(numberCheck(55));
    console.log(numberCheck(66));
    console.log(numberCheck(65));
    console.log(numberCheck(65));
})();