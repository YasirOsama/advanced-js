qrinput=document.getElementById("qr-input");
qrimg=document.getElementById("qr-img");
qrbutton=document.getElementById("qr-button");

console.log(qrinput,qrbutton,qrimg);


qrbutton.addEventListener('click',()=>{
    const inputvalue=qrinput.value;
    console.log(inputvalue);
   
    if(!inputvalue){
        alert('please inter valid url');
        return;
    }
    
    else{
        qrimg.src=' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}';
        qrimg.alt='Qr code for ${inputvalue}';
    }

});