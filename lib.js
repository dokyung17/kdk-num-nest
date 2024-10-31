function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
    }
    function prime(num) {
        if (num<=1) return false;
        for(let i=2;i<Math.sqrt(num);i++){
            if(num%i==0)
                return false;
        }
        return true;
    }
    function factorial(num) {
        let fac=1;
        for(let i=num;i>1;i--){
            fac*=i;
        }
    return fac;
    }
    module.exports = {
    avg,
    prime,
    factorial
    }