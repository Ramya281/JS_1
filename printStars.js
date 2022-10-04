(function () {
    function printStars(noOfStars) {
        for (let i = 0; i < noOfStars; i++) {
            for (let j = 0; j < i; j++) {
                console.log("*");
                document.write("*")
                
            }
            console.log("/n");
            document.write("<br/>");
            
        }
        
    }
    console.log(printStars(10));
    
    
})();