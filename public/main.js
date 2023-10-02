const words = document.querySelector('.post p');
const upper = document.querySelectorAll('.title');
for(let i = 0;i < upper.length;i++){
  upper[i].innerText = upper[i].innerText.toUpperCase();
}

if(words.innerText.length <= 100 && words.innerText.length >= 50){
 const slicedWords = words.innerText.slice(0,-50)
 words.innerText = slicedWords;

} else if(words.innerText.length <= 200 && words.innerText.length >= 100){
  const slicedWords = words.innerText.slice(0,-50)
 words.innerText = slicedWords;
} else if(words.innerText.length <= 400 && words.innerText.length >= 300){
  const slicedWords = words.innerText.slice(0,-200)
 words.innerText = slicedWords;
} else if(words.innerText.length <= 500 && words.innerText.length >= 400){
  const slicedWords = words.innerText.slice(0,-300)
 words.innerText = slicedWords;
} 

