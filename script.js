const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('in');
}),{threshold:.16});
reveals.forEach(el=>io.observe(el));

const ball = document.querySelector('.ball');
const court = document.querySelector('.court-wrap');
const hero = document.querySelector('.hero');
const rails = document.querySelectorAll('.progress-rail span');

function animateScene(){
  const y = window.scrollY;
  const vh = window.innerHeight;
  const max = Math.max(document.body.scrollHeight-vh,1);
  const p = y/max;
  rails.forEach((r,i)=>{
    const start=i/rails.length, end=(i+1)/rails.length;
    r.style.setProperty('--fill',`${Math.max(0,Math.min(1,(p-start)/(end-start)))*100}%`)
  });
  if(ball && hero){
    const hp=Math.min(1,y/vh);
    const x = 12 + hp*72;
    const bounce = Math.abs(Math.sin(hp*Math.PI*5))*150;
    ball.style.left=`${x}%`;
    ball.style.top=`${42 - bounce/8}%`;
    ball.style.transform=`translate(-50%,-50%) rotate(${hp*900}deg) translateZ(${bounce}px)`;
  }
  if(court){
    const hp=Math.min(1,y/vh);
    court.style.transform=`translate(-50%,-50%) rotateX(${64-hp*12}deg) rotateZ(${-5+hp*3}deg) scale(${1+hp*.08})`;
    court.style.opacity=`${.72-hp*.4}`;
  }
}
window.addEventListener('scroll',animateScene,{passive:true});
animateScene();

hero?.addEventListener('mousemove',e=>{
  const rx=(e.clientY/window.innerHeight-.5)*-5;
  const ry=(e.clientX/window.innerWidth-.5)*6;
  if(court) court.style.setProperty('filter',`drop-shadow(${ry*2}px 40px 50px rgba(0,0,0,.35))`);
  document.documentElement.style.setProperty('--mx',`${e.clientX}px`);
  document.documentElement.style.setProperty('--my',`${e.clientY}px`);
});

// seamless page entrance
window.addEventListener('pageshow',()=>document.body.classList.add('ready'));
document.querySelectorAll('a[href$=".html"]').forEach(a=>a.addEventListener('click',e=>{
  const href=a.getAttribute('href');
  if(!href || href.startsWith('#')) return;
  e.preventDefault();
  document.body.style.opacity='0';
  document.body.style.transform='scale(.995)';
  setTimeout(()=>location.href=href,280);
}));
document.body.style.transition='opacity .3s ease, transform .3s ease';

const form=document.querySelector('#bookingForm');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const btn=form.querySelector('button');
  const old=btn.textContent;
  btn.textContent='تم استلام طلب الحجز ✓';
  btn.style.background='#5f744d';
  setTimeout(()=>{btn.textContent=old;btn.style.background='';form.reset()},2500);
});
