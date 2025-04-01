function addElementToStart(arr,element){
    arr.unshift(element);
    return arr;

}
let myArray=[3,4,5,6];
let newElement=2;
console.log(addElementToStart(myArray,newElement));

