(function(){
    function fibonacci(number) {
        let previous = 0,current = 1,output =0;
        console.log(previous);
        console.log(current);
        for (let i = 0; i <= number; i++) {
            output = previous + current;
            console.log(output);
            previous=current;
            current=output;

       } 
        
    }
    console.log(fibonacci(10));


})();