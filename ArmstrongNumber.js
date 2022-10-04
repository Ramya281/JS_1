(function (){
    function armstrongNumber(number){
        let sum = 0;
        let digit = 0;
        let temp = number;
        while(temp > 0){
            digit= temp % 10;
            sum = sum + (digit**3);
            temp=parseInt(temp/10);
    
        }

        if(sum == number){
            return  number+" is an Armstrong Number";

        }
        else{
            return  number+" is not an armstrong Number";

        }


    }



    console.log(armstrongNumber(153));
    console.log(armstrongNumber(121));
    console.log(armstrongNumber(125));
    
    
})()