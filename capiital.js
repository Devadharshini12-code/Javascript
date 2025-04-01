function capitalizeFirstLetter(str){
    if(!str)return '';
    return str.charAt(0).toUpperCase()+str.slice(1);
}

let inputstring="welcome to credo systemz";
console.log(capitalizeFirstLetter(inputstring));