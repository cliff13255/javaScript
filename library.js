//geting the ids by DOM

let receipt=document.getElementById("receipt");
let total=document.getElementById("total");
let jina=document.getElementById("name");
let title=document.getElementById("title");
let number=document.getElementById("number");
                      
//the onclick function is being given work

function calculateTotal(){

//declaring some variables and assigning them

let namba=parseFloat(number.value);
let fees= namba*10;
let myName=jina.value;
let head=title.value;               

//setting a default empty recipt to be printed

receipt.innerHTML="";

//desision making

if(number.value<1 || !namba){
   receipt.style.display="none";
    total.textContent="You were time councious hence no charges" ; 
    fees=0;
}else{

   total.textContent=`Your total charge fees is ${fees } units .Please pay`; 

   receipt.style.display="block";

 let div=document.createElement("p");
 
 div.innerHTML=`Name:<span> ${myName}</span><br>
Book Title: <span> ${head}</span> <br>
Number of days: <span> ${namba} days</span> <br>
Total Fees: <span> ${fees} units</span>`;

 receipt.appendChild(div);
}

 //clering the content once the button is clicked 

jina.value="";
 number.value="";
 title.value="";   

}

 