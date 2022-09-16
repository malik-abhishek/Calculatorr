let outputScreen=document.getElementById("output-screen"); 

function display(num){
    outputScreen.value +=num;
}
function Calculate(){
    try{
        outputScreen.value= eval(outputScreen.value);
        outputScreen.value=(Math.floor(outputScreen.value*10000)/10000).toFixed(4);
        console.log(outputScreen.value);
    }catch{
        alert("Invalid Input");
    }
}
function Clear()
{
    outputScreen.value="";
}
function Del()
{
    outputScreen.value=outputScreen.value.slice(0,-1);
}