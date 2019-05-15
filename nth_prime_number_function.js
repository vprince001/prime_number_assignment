let requiredPrimeTerm = +process.argv[2];

const nthPrime = function(requiredPrimeTerm){
  let primeNumber = 0;
  let isPrime = 0;
  let countPrime = 2;
  let primeCandidate = 3;
  let specialConditions = [0,2,3];
  
  if(requiredPrimeTerm <= 2){
    primeNumber = specialConditions[requiredPrimeTerm];
  } else {
    while(countPrime < requiredPrimeTerm) {
      primeCandidate+=2;
      isPrime = true;
      for(let number = 3; number <= Math.sqrt(primeCandidate) ; number+=2) {
        if((primeCandidate % number) == 0){
          isPrime = false;
          number=primeCandidate;
        }
      }
      if(isPrime){
        countPrime+=1;
        primeNumber = primeCandidate;
      }
    }
  }
  return primeNumber;
}

console.log(nthPrime(requiredPrimeTerm));
