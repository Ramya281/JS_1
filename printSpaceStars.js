(function () {
    
    function printStars(noOfRows) {
        let output = "";
        for (let i = 1; i <= noOfRows; i++) {

            for (let j = noOfRows; j > i; j--) {
                output+=" ";
                
            }
            for(let spaces = 0; spaces <i*2-1;spaces++){
                output+="*";
                

            }
            output+="<br>";
            
            
            
            
        }
        
        document.write("<pre>"+output+"</pre>");
        
        
        
    }
    console.log(printStars(10));
    

    
})();