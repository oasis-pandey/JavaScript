
for(let i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        if(this.innerHTML == 'w') playAudio("crash");
        if(this.innerHTML == 'a') playAudio("kick-bass");
        if(this.innerHTML == 's') playAudio("snare");
        if(this.innerHTML == 'd') playAudio("tom-1");
        if(this.innerHTML == 'j') playAudio("tom-2");
        if(this.innerHTML == 'k') playAudio("tom-3");
        if(this.innerHTML == 'l') playAudio("tom-4");
    });
    
}
 
function playAudio(button){
    let audio = new Audio(`sounds/${button}.mp3`)
    audio.play();
}