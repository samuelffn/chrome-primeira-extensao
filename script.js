document.addEventListener('DOMContentLoaded', function(){

document.querySelector('#btn').addEventListener('click', function(){
    let text = document.querySelector('#texto').value;
    let convertido = upper(text);
    document.querySelector('#result').innerHTML = convertido;
    
    //alert(convertido);


})

function upper(text){
    return text.toUpperCase();
}

function getComputerName() {
    try {
         var network = new ActiveXObject('WScript.Network');
        alert(network.computerName);
    }
    catch (e) { 
   }
 }


}  )