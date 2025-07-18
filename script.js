 const textarea=document.getElementById("textarea");
 const btn=document.getElementById("btn");
 const select=document.getElementById("select")



function gapir(e) {
    console.log(textarea.value);
    
     if(textarea.value.trim() === ""){
        alert("iltimos matn kiriting")
        return
     } 
    const ovozSozlamasi = new SpeechSynthesisUtterance(textarea.value);
    ovozSozlamasi.lang = select.value
    window.speechSynthesis.speak(ovozSozlamasi)
}

btn.addEventListener("click",gapir)
