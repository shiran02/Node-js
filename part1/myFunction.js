const math = (number1,number2,number3,number4) => {
    
    let a = number1 + number2 * 2;
    
    if(number3){
        console.log('in if else');
        a += number3 - 5;
    }else if(number4){
        console.log('in if else');
        a *= number4
    }

    return a;

}


export  {math};
//common js
// module.exports = math;


console.log(math(2,3));
console.log(math(2,3,5,5));