var number_count=10;
for (var prime_iterator = 2; prime_iterator < number_count; prime_iterator++) {

    var isPrime = true;
    for(var divident = 2;divident<=Math.sqrt(prime_iterator);divident++){
        if (prime_iterator % divident === 0){
            isPrime = false;
            break;

        }
    }
    if(isPrime){
        document.write(prime_iterator + " ");
    }
    
}
document.write("<br>");