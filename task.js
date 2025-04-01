 
//  for(i=0;i<=20;i++)
//  {
//      if(i%2==0)
//         {
//             console.log(i+"-even number")
//         }
//     else{
//         console.log(i+"-odd number")
//     }
//  }

// Factorial
// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     else{
//         return factorial(n-1)*n
//     }
// }
// console.log(factorial(5)
        

function generateOTP() {
    let digits='0123456789';
    let OTP='';
    let len=digits.length
    for (let i=0;i<4;i++){
        OTP +=digits[Math.floor(Math.random()*len)];
    }
    return OTP;
}
console.log("OTP of 4 digits:")
console.log(generateOTP());

// function generateOTP(){
//     let digits='0123456789abcdefghijklmnopqrstuvwxyz';
//     let OTP='';
//     let len= digits.length
//     for (let i=0;i<6;i++){
//         OTP += digits[Math.floor(Math.random()*len)];
//     }
//     return OTP;
// }
// console.log("OTP of 6 digits:")
// console.log(generateOTP());