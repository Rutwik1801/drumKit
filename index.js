for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // mouse click
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var pressedButton = this.innerHTML;
    makeSound(pressedButton);
    buttonAnimation(pressedButton);
  })
}
// keyboard click
document.addEventListener("keydown",function (event){
  var keyboardPress=event.key.toLowerCase();
  makeSound(keyboardPress);
  buttonAnimation(keyboardPress);

})

// keyboard and mouse click
function makeSound(dd){


  switch (dd) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log("jj");
    }
  }

function buttonAnimation(x){
 var currentButton=document.querySelector("." + x).classList.add("pressed");
 setTimeout(function(){
  var currentButton=document.querySelector("." + x).classList.remove("pressed");
 }, 100);
}
