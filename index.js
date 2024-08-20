document.addEventListener('DOMContentLoaded', function() {
  const themeButton=document.getElementById("theme-button");
  const signNowButton = document.getElementById("sign-now-button");






const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");


}
themeButton.addEventListener("click", toggleDarkMode)

//const signNowButton= document.getElementById("sign-now-button");

const addSignature= () =>{
  const name= document.getElementById('name').value;
  const hometown = document.getElementById('hometown').value;


if (name && hometown) {
  const newSignature= document.createElement('p');
  newSignature.textContent = '🖊️ ${name} from ${hometown} supports this.';

  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);

  document.getElementById('name').value=''
  document.getElementById('hometown').value=''
  document.getElementById('email').value=''
}

else {
  alert ("Please Fill out all sections");
}
};

const validateForm = () => {

  let containsErrors = false;

  const petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length >= 2) {
      //containsErrors = true;
      //petitionInputs[i].classList.add('error');
      petitionInputs[i].classList.remove('error');
    }
    else {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
  }
  if (!containsErrors){
     addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    //containsErrors = false; 
  }
};

  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors


//let themeButton = document.getElementById("theme-button");
signNowButton.addEventListener('click', validateForm);

});

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
  
}

let revealableContainers= document.querySelectorAll('.revealable');

for (let i=0; i<revealableContainers.length; i++){
  let windowHeight = window.innerHeight;
  let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
  if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
    revealableContainers.classlist.add('active2')
  } else {
    revealableContainers.classlist.remove('active2')
  }
}