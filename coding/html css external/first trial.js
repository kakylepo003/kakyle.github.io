const wrapper = document.getElementById('envelopeWrapper');
const flap = document.getElementById('flap');
const seal = document.getElementById('seal');
const letter = document.getElementById('letter');
const closeBtn = document.getElementById('closeBtn');
const hint = document.getElementById('hint');
const letterContent = document.getElementById('letterContent');

let isOpen = false;
let typing = false;

// === EDIT MO LANG DITO PRE ===
const months = 8; // Ilang months na kayo
const partnerName = "lovelovee"; // Pangalan ng partner mo
const yourName = "Kyle"; // Pangalan mo

const message = `My Love,

Happy ${months} Monthsary ${partnerName}. 
Grateful akuu soaferr dahil nakilala kita at magiging kasama kita sa hirap at ginhawa. Thankyouusoomuchhh sa walang sawang pagmamahal saakin at sa pag-aalaga saakin. Thankyousomuchh kasi lahat po ng comfort na hanap ko is naibibigay mo, andd Thankyouu soomuchh poo dahil never ikaw sumuko. Thankyouusomuchhh sa pagiging tahanan, safe place andd comfort zone kuu.
 ambilis mag ${months} months hihiih, Iloveyousoomuchhh ${partnerName} very muchhh, more than words can express. I say it alot pero trust me, I mean it every single time.
I promise to be much better than the past, and I will always be here for you. I loveyousoomuchh poo ${partnerName}
Sincerly yours:
${yourName}`;
// ==============================

function typeWriter(text, element, speed = 35) {
  if(typing) return;
  typing = true;
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      typing = false;
    }
  }
  type();
}

wrapper.addEventListener('click', () => {
  if(isOpen) return;
  
  isOpen = true;
  flap.classList.add('open');
  seal.classList.add('hide');
  hint.style.display = 'none';
  
  setTimeout(() => {
    letter.classList.add('open');
    setTimeout(() => {
      typeWriter(message, letterContent);
    }, 500);
  }, 600);
  
  createHearts(15);
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  letter.classList.remove('open');
  setTimeout(() => {
    flap.classList.remove('open');
    seal.classList.remove('hide');
    hint.style.display = 'block';
    isOpen = false;
    letterContent.textContent = '';
  }, 500);
});

// Floating hearts
function createHearts(count) {
  for(let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '💖';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 4 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, i * 80);
  }
}