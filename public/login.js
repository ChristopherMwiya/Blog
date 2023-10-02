//                MODEL
const passwordInput = document.querySelector('#password');
const eyeIcon = document.querySelectorAll('.icon');
let iconStat = 'unactive';
const inforPass = document.querySelector('.infor');
const showInfor = () => {
  const len = passwordInput.value.length;
  if (len == 9 ) {
    inforPass.style = 'display:block'
    inforPass.classList.remove('out')
    passwordInput.style.border = '6px solid red'
    let sliced = passwordInput.value.slice(0,-1);
    passwordInput.value = sliced;
  } else {
    inforPass.classList.add('out')
    passwordInput.style.border = '1px solid white'
  }
}
//                VIEW
//              CONTROLLER 
eyeIcon[1].addEventListener('click',() => {

  if(iconStat === 'unactive'){
    passwordInput.removeAttribute('type','password')
    iconStat = 'active'
    eyeIcon[1].innerHTML = '🙈';
  } else {
    passwordInput.setAttribute('type','password')
    iconStat = 'unactive'
    eyeIcon[1].innerHTML = '👁️';
  }
  
});

passwordInput.onkeydown = showInfor;