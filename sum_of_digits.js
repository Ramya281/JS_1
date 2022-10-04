(function() {
    function getSumOfDigits(number) {
        let sum = 0;
        while(number >= 1){
            sum = sum + (number%10);
            number=parseInt(number/10);

        }
        return sum;
    }
    console.log(getSumOfDigits(143));
    console.log(getSumOfDigits(103));
    console.log(getSumOfDigits(183));
    console.log(getSumOfDigits(173));
    
})();