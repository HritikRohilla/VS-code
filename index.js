/*//  alert("mh name is tiger");
// document.write("this is my write")
//----------------------// JAVASCRIPT CONSOLE API //----------------//
console.log("hellow world", + 4 + 6, "ANOTHER LOG")
console.warn("this is warning")            //for wwarning
console.error("this is an error")


//JavaScript variables
//what are Variables? - Container to store data values
var num1 = 98;
var num2 = 40;
console.log(num1 + num2);

//  Data types in JS
var str1 = " hii m hritik hun";
var str2 = 'hii mera naam muskan';



//Booleans
var a = true
var b = false

console.log(a, b)

/*At a very high lvl, there are two types of data types in JS
1. Primitive data types: undefined, null , number, String, boolean, Symbol.
2. Reference data types: Arrays and Objects.


*/
/*
//Array

var A = [1, 5, 9, "hii", 10]

// objects
var marks = {
    ravi: 34,
    subham: 87,
    harry: 86.65,

}
console.log(marks)
/*

// Logical  AND  operator
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(true && true)

//Logical OR
console.log(true || true)
console.log(true || false)
console.log(false || false)
console.log(true || true)

//Logical NOT

console.log(!true)
console.log(!false)

*/
/*
//Default Function


function avg(a, b) 
{ 
    return (a + b) / 2
}

c1 = avg(42, 60)
c2 = avg(54, 10)
console.log(c1, c2)

// Conditionals in Javvva Script
 
var age = 55;
 if(age > 2){
     console.log('you are not a kid')
 }
 else{
    console.log('you are a kid')
}
//if else ladder
if(age > 32){
    console.log("you not a  girl kid ")
}
else if(age>26){
    console.log("bache nhi rhe")
}
else if(age>22){
    console.log("bache nhi rhe")
}
else if(age < 5){
    console.log("you a girl kid")
}
*/
//For Loop
/*
var arr = [1, 2, 3, 4, 5, 6]
/*console.log(arr)
for(var i = 0; i<arr.length;i++){
    console.log(arr[i])
}
arr.forEach(function(element){
    console.log(element)
})*/
/*
const ac = 0;
ac++;*/
//While Loop
/*
let j = 0;
while(j<arr.length){
    console.log(arr[j])
    j++
}*/
//do While
/*do{
    console.log(arr[j]);
    j++
}while(Syntex)*/
/*
for(var i = 0; i<arr.length;i++){
    if(i==2){
        //brak;
        //continue;
    }
    console.log(arr[i])
}

let myarr = ["fan", "camera", 34, null, true];
console.log(myarr.length);
//myarr.pop() this funvtion is used for poping out the last element of array it will not print the last element.
//myarr.pop()
//myarr.shift() //This function is used for poping out the first element . 
myarr.unshift("Harry") //This functon will add one element at first postion.
//myarr.toString();
//myarr.sort();
console.log(myarr);*/
/*
let myLovelyString = "Harry is a good boy boy";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("boy"))
console.log(myLovelyString.lastIndexOf("boy"))

//Slicing
console.log(myLovelyString.slice(0,3))
console.log(myLovelyString.replace("Harry","Hritik"))
*/
/*
let mydate = new Date()
console.log(mydate)
console.log(mydate.getTime())
console.log(mydate.getFullYear())
console.log(mydate.getDay())
console.log(mydate.getMinutes())

*/
//DOM Manipulation method

let m = document.getElementById('click')
console.log(m)
let d = document.getElementsByClassName('container')
console.log(d)
//d[0].style.background = "yellow"
//d[1].style.border = "3px solid pink"
d[0].classList.add("bg-primary"); //calling default class and changing original class element
d[0].classList.add("Text-success");
//d[0].classList.remove("Text-success") //in case of removing the element
console.log(d[0].innerHTML)// For showing inner HTML of a targeted class elements.
console.log(d[0].innerText)

tn = document.getElementsByTagName('div')
console.log(tn)
/*
createdElement = document.createElement('p')
createdElement.innerText = " This is a created para"
tn[0].appendChild(createdElement)
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is a created Bold"
tn[0].replaceChild(createdElement2, createdElement)

//Selecting using query

sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)
*/

//Events in java sccript


/*function clicked() {
    console.log('the button was clicked')
}

window.onload = function(){
    console.log('The document was loaded')

}

FirstContainer.addEventListener('click',function(){
    console.log("click hua")
})

FirstContainer.addEventListener('mouseover',function(){
    console.log("mouse on container")
})

FirstContainer.addEventListener('mouseout',function(){
    console.log("mouse exit container")
})
*/
/*
FirstContainer.addEventListener('mouseup',function(){
    console.log("mouse up when clicked on container")
})

FirstContainer.addEventListener('mousedown',function(){
    console.log("mouse down when clicked on container")
})*/
/*
FirstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    console.log("mouse on container")
})*/
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
FirstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML
    console.log("mouse up when clicked on container")
})

FirstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
    console.log("mouse down when clicked on container")
})


        // Arrow Function //

/*
function sum(a,b){
    return a+b;
}+*/

/*sum = (a,b)=>{
    return a+b;
}*/


//    SetTimeOut & setInterval  //

//logKaro = ()=>{

  //  console.log("i m your log")
   //document.querySelectorAll('.container')[1].innerHTML = "<b> Set intervel fired </b>" }
//setTimeout(logKaro/*function*/,2000/*miliSecond  = 1 sec */);

//clr = setInterval(logKaro,2000);
/* // for stoping them anytime by taking their return type into these function.
clearInterval(clr)
clearTimeout(clr)
*/

//      Java script Local Storage  // it helps you to store data in user computer in the form of string 
/*
localStorage.setItem('name','Hritik')  // for intializing local new local storage

localStorage // for print localStorage

localStorage.clear() // for clearing local storage

localStorage

localStorage.setItem('name','Chintoo')


localStorage.clear()

localStorage.setItem('name','Hritik')

localStorage

localStorage.getItem('name') // for getting local storage value

localStorage.removeItem('name')

*/


//       Jason          //
/*

obj = {name : " Hritik", "length" : 1,a : {this : "that"} }
jso = JSON.stringify(obj)
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":" Hritik","length":1,"a":{"this":"that"}}`)
console.log(parsed)
*/

// Template literals - Backticks (  ` )       //
/*
a = 34
console.log(`This is my ${a}`)
*/