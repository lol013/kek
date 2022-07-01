$( function() {
  
  var lol2 = gsap.to(".lol", {duration: 60, x: 800});
  document.querySelector('.lol').onclick = () => lol2.pause();
  document.querySelector('.lol').ondblclick = () => lol2.play();
  document.querySelector('.btn').onclick = () => lol2.progress(0.80);
} );
    
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lol'), // Required
  path: '110332-drums.json', // Required
  renderer: 'svg', // Required
 
});

document.querySelector('.btn').onclick = () => animation.pause() 
