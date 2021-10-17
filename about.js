let toContainer=document.getElementById("todocontainer");
let inputFild=document.getElementById("inputFild");
let addToLast = document.getElementById("adtodo1");
let addToFirst = document.getElementById("adtodo2");
let checkOut = document.getElementById("adtodo3");

let digitaltKösystem=[];

 

    addToLast.addEventListener("click",function(){

        if(inputFild.value==""){
            alert("Plese entre passenger name")
        }
        digitaltKösystem.push(inputFild.value)    
        var lastOne= document.createElement("li")
        lastOne.classList.add("paragraph-styling")
        lastOne.innerText= inputFild.value;
        toContainer.appendChild(lastOne)
        inputFild.value="";
        
        
      
    })
       
       
   
   
    addToFirst.addEventListener("click",function(){
        
        if(inputFild.value==""){
            alert("Plese entre passenger name")
        }
        digitaltKösystem.push(inputFild.value);
        var firstOne= document.createElement("li")
        firstOne.classList.add("paragraph-styling")
        firstOne.innerText= inputFild.value;
        toContainer.prepend(firstOne)
        inputFild.value="";
       

    })
   
    checkOut.addEventListener("click",function(){
        if(toContainer.innerText.length<=0){
            alert("There are currently no people standing in line")
        }
           
            
        
        toContainer.removeChild(toContainer.firstElementChild);
   
        
    })
