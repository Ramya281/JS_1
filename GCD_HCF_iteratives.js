(function(){
    function getHCF(firstNumber,secondNumber){
        let HCF;
        for(let i=1;i<=firstNumber && i<=secondNumber;i++){
            if(firstNumber%i==0 && secondNumber%i==0){
                HCF = i;
            }
        }
        return HCF;
    }
    console.log(getHCF(16,8));
    console.log(getHCF(15,5));
    console.log(getHCF(40,12));

})();