(function(){
    function power(base,exponent) {
        let output = 1;
        if(exponent==0)return 1;
        while(exponent>0){
            output= output *base;
            exponent--;

        }
        return output;

        
    }
    console.log(power(5,2));
    console.log(power(5,7));
    console.log(power(5,5));
    console.log(power(5,0));

})();