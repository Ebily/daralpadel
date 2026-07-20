const I18N={
 ar:{home:'الرئيسية',about:'من نحن',why:'لماذا البادل؟',booking:'الحجز',contact:'تواصل معنا',login:'تسجيل الدخول',bookNow:'احجز ملعبك',discoverMore:'اكتشف دار البادل',scroll:'مرّر لاكتشاف التجربة',heroEye:'هنا تبدأ المباراة',heroTitle:'دار|البادل',heroText:'دار البادل وجهة رياضية واجتماعية صُممت حول اللاعب؛ من سهولة الحجز إلى أجواء الملعب، ومن أول إرسال إلى آخر نقطة.',s1Eye:'تجربة اللاعب',s1Title:'كل تفصيل يهيئك لمباراة أفضل.',s1Text:'في دار البادل نهتم بما يهم اللاعب فعلًا: ملعب مهيأ، وإضاءة واضحة، وحجز سهل، وأجواء تمنحك التركيز والحماس منذ لحظة الوصول.',k1:'تجربة لاعب متكاملة',k2:'لاعبون في كل مباراة',k3:'مباريات تستحق التكرار',s2Eye:'لعبة تجمع الجميع',s2Title:'سهلة في البداية، عميقة كلما تطورت.',s2Text:'تمنحك البادل متعة من المباراة الأولى، ثم تكشف لك مع الوقت تفاصيل التمركز، وقراءة الزجاج، والسيطرة على الشبكة، واللعب بانسجام مع شريكك.',f1:'إيقاع سريع',f1p:'تبادلات متواصلة، وقرارات سريعة، وحماس يبقى حتى آخر كرة.',f2:'لعبة اجتماعية',f2p:'رياضة تجمع الأصدقاء والعائلة والزملاء في منافسة ممتعة وروح فريق واحدة.',f3:'تحدٍ يتجدد',f3p:'كل مباراة تعلّمك شيئًا جديدًا في التمركز، والتوقيت، واختيار الضربة المناسبة.',s3Eye:'موعدك القادم',s3Title:'احجز ملعبك، وجهّز فريقك.',s3Text:'سجّل الدخول، واختر التاريخ والملعب والوقت المتاح، ثم أكّد حجزك بخطوات واضحة وسريعة.',startBooking:'ابدأ الحجز الآن',footer:'© 2026 دار البادل — اللعبة لها دار.'},
 en:{home:'Home',about:'About us',why:'Why padel?',booking:'Booking',contact:'Contact',login:'Sign in',bookNow:'Book a court',discoverMore:'Discover Dar Alpadel',scroll:'Scroll to enter the experience',heroEye:'A different sporting experience',heroTitle:'DAR|ALPADEL',heroText:'A sporting and social destination designed around the complete match experience — from arrival to the final point.',s1Eye:'From the first hit',s1Title:'Every match begins with a different feeling.',s1Text:'At Dar Alpadel, every detail matters: a well-prepared court, a welcoming atmosphere, effortless booking, and a community built around play.',k1:'Complete experience',k2:'Players, one team',k3:'Moments to repeat',s2Eye:'A sport for everyone',s2Title:'Easy to start. Deep to master.',s2Text:'Padel rewards you from the first match, then keeps opening new layers of movement, strategy, fitness, and skill.',f1:'Energetic rhythm',f1p:'Fast points and constant movement make every minute on court engaging.',f2:'Social by nature',f2p:'A sport that brings friends, families, and colleagues together through joyful competition.',f3:'Continuous progress',f3p:'Start simply, then sharpen your positioning, reading, and decision-making point by point.',s3Eye:'Your next match',s3Title:'Your booking starts with your account.',s3Text:'Create an account or sign in, choose an available date and time, and confirm your court in a few steps.',startBooking:'Sign in & book',footer:'© 2026 Dar Alpadel — play, connect, return.'}
};
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

const STATIC_EN={
'الرئيسية':'Home','من نحن':'About us','لماذا البادل؟':'Why padel?','الحجز':'Booking','تواصل معنا':'Contact','تسجيل الدخول':'Sign in','قصتنا • OUR STORY':'OUR STORY','نصنع':'We create','المكان':'the place','دار البادل وجهة تجمع الرياضة والضيافة والمجتمع في تجربة واحدة متناسقة، صُممت لتجعل كل زيارة جديرة بالتكرار.':'Dar Alpadel brings sport, hospitality, and community into one coherent experience designed to make every visit worth repeating.','رؤيتنا':'Our vision','أن تصبح البادل جزءًا من أسلوب الحياة.':'To make padel part of everyday life.','نطمح إلى بناء مجتمع رياضي مرحّب يوازن بين الاحتراف والمتعة، ويمنح المبتدئ والثنائي والعائلة واللاعب المنافس مساحة يشعرون فيها بالانتماء.':'We aim to build a welcoming sports community that balances professionalism and enjoyment, giving beginners, pairs, families, and competitive players a place where they belong.','جودة يمكن ملاحظتها':'Quality you can feel','تفاصيل تشغيلية وتجربة استخدام مصممة حول راحة اللاعب.':'Operational details and a user journey designed around player comfort.','مجتمع يتطور معًا':'A community that grows together','مباريات، تدريبات وفعاليات تصنع روابط تتجاوز وقت اللعب.':'Matches, coaching, and events that create connections beyond court time.','هوية لها حضور':'An identity with presence','لغة بصرية مستوحاة من أرضية الملعب، حركة الكرة، وروح البادل.':'A visual language inspired by the court, the ball in motion, and the spirit of padel.','قيمنا':'Our values','احتراف في الخدمة. بساطة في التجربة.':'Professional service. Effortless experience.','نؤمن بالاحترام داخل الملعب، الوضوح في الحجز، الاهتمام بالتفاصيل، وبناء بيئة يشعر فيها الجميع بالترحيب.':'We believe in respect on court, clarity in booking, attention to detail, and a welcoming environment for everyone.','لماذا هذه اللعبة؟':'WHY THIS GAME?','متعة':'A game','تتحرك معك':'that moves with you','البادل سهلة في بدايتها، غنية في تفاصيلها، واجتماعية بطبيعتها؛ ولهذا تحولت سريعًا إلى رياضة يحبها الناس من مختلف الأعمار والمستويات.':'Padel is easy to begin, rich in detail, and social by nature — which is why it has quickly become loved across ages and levels.','01 — بداية سهلة':'01 — EASY TO START','تلعب من اليوم الأول.':'Play from day one.','المساحة الأصغر واللعب الزوجي واستخدام الجدران تجعل تعلم الأساسيات أسرع، من دون أن تفقد اللعبة عمقها كلما تطور مستواك.':'The smaller court, doubles format, and use of the walls make the fundamentals quicker to learn without reducing the game’s depth as you progress.','إيقاع سريع':'Fast rhythm','تبادل مستمر ونقاط مليئة بالحركة.':'Continuous rallies and action-filled points.','لجميع المستويات':'For every level','من أول تجربة حتى المنافسة المتقدمة.':'From a first session to advanced competition.','02 — اجتماعية':'02 — SOCIAL','أربعة لاعبين. تجربة واحدة.':'Four players. One experience.','اللعب الزوجي يجعل التواصل جزءًا من التكتيك، ويحوّل المباراة إلى وقت ممتع يجمع المنافسة والضحك وروح الفريق.':'Doubles makes communication part of the strategy and turns every match into a mix of competition, laughter, and team spirit.','03 — متكاملة':'03 — COMPLETE','رياضة للجسم والعقل.':'A sport for body and mind.','تجمع البادل بين اللياقة، سرعة الاستجابة، قراءة الخصم، واتخاذ القرار، في قالب ممتع يدفعك للعودة.':'Padel combines fitness, reaction speed, opponent reading, and decision-making in an enjoyable format that keeps you coming back.','سريعة':'Fast','في التعلّم':'to learn','ذكية':'Smart','في التكتيك':'in strategy','اجتماعية':'Social','في التجربة':'by nature','حساب دار البادل':'Dar Alpadel account','سجّل الدخول للحجز وإدارة مواعيدك، أو أنشئ حسابًا جديدًا خلال أقل من دقيقة.':'Sign in to book and manage your sessions, or create a new account in under a minute.','إنشاء حساب':'Create account','البريد الإلكتروني':'Email address','كلمة المرور':'Password','دخول إلى حسابي':'Sign in to my account','نسخة تجريبية أمامية: يتم حفظ حالة الدخول محليًا في المتصفح.':'Front-end prototype: sign-in status is stored locally in the browser.','الاسم الكامل':'Full name','رقم الهاتف':'Phone number','إنشاء الحساب والمتابعة':'Create account and continue','حجزك، بخطوات واضحة.':'Your booking, made clear.','سجّل الدخول أولًا، ثم اختر التاريخ والملعب والوقت المتاح وأكّد طلبك.':'Sign in first, then choose the date, court, and available time before confirming.','تسجيل الدخول مطلوب لإتمام الحجز':'Sign in is required to book','يساعدك الحساب على حفظ حجوزاتك، تعديلها لاحقًا، واستلام التأكيدات.':'Your account lets you save bookings, manage them later, and receive confirmations.','تسجيل الدخول أو إنشاء حساب':'Sign in or create an account','الحساب الحالي':'Current account','تسجيل الخروج':'Sign out','تاريخ المباراة':'Match date','الملعب':'Court','الملعب 01':'Court 01','الملعب 02':'Court 02','الملعب 03':'Court 03','اختر الوقت المتاح':'Choose an available time','نوع الحجز':'Booking type','مباراة عادية':'Regular match','تدريب خاص':'Private coaching','فعالية جماعية':'Group event','عدد اللاعبين':'Number of players','ملاحظات':'Notes','تأكيد طلب الحجز':'Confirm booking request','نحن':'We are','قريبون':'here for you','للاستفسارات، البطولات، الفعاليات الخاصة، الشراكات أو الدعم؛ فريق دار البادل جاهز للاستماع والمساعدة.':'For enquiries, tournaments, private events, partnerships, or support, the Dar Alpadel team is ready to listen and help.','الهاتف':'Phone','البريد':'Email','ساعات العمل':'Opening hours','يوميًا — 09:00 إلى 00:00':'Daily — 09:00 to 00:00','الاسم':'Name','وسيلة التواصل':'Contact details','الموضوع':'Subject','استفسار عام':'General enquiry','تنظيم بطولة':'Tournament organisation','فعالية خاصة':'Private event','شراكة أو رعاية':'Partnership or sponsorship','الرسالة':'Message','إرسال الرسالة':'Send message'
};
function translateStatic(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=walker.nextNode()){
   if(!n.parentElement||['SCRIPT','STYLE'].includes(n.parentElement.tagName)||n.parentElement.closest('[data-i18n]'))continue;
   if(!n.__ar)n.__ar=n.nodeValue;
   const raw=n.__ar,trim=raw.trim();
   if(!trim)continue;
   const value=lang==='en'&&STATIC_EN[trim]?STATIC_EN[trim]:trim;
   n.nodeValue=raw.replace(trim,value);
 }
 document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{
   if(!el.dataset.arPlaceholder)el.dataset.arPlaceholder=el.getAttribute('placeholder')||'';
   const ar=el.dataset.arPlaceholder;el.placeholder=lang==='en'?(STATIC_EN[ar]||ar):ar;
 });
}

let lang=localStorage.getItem('darLang')||'ar';
function applyLang(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';$$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(I18N[lang][key]){if(key==='heroTitle'){const [a,b]=I18N[lang][key].split('|');el.innerHTML=`${a}<span>${b}</span>`}else el.textContent=I18N[lang][key]}});$('.lang-switch')?.replaceChildren(document.createTextNode(lang==='ar'?'EN':'عربي'));localStorage.setItem('darLang',lang);translateStatic();syncAccount?.()}
applyLang();$('.lang-switch')?.addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';applyLang()});
$('.menu-toggle')?.addEventListener('click',()=>$('.nav')?.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.14});$$('.reveal').forEach(el=>io.observe(el));
const ball=$('.ball'),court=$('.court-wrap'),hero=$('.hero');
function animate(){const y=scrollY,vh=innerHeight,max=Math.max(document.body.scrollHeight-vh,1),p=y/max;document.documentElement.style.setProperty('--progress',`${p*100}%`);if(ball&&hero){const hp=Math.min(1,y/vh),x=12+hp*75,b=Math.abs(Math.sin(hp*Math.PI*5))*155;ball.style.left=`${x}%`;ball.style.top=`${43-b/8}%`;ball.style.transform=`translate(-50%,-50%) rotate(${hp*1050}deg) translateZ(${b}px)`}if(court){const hp=Math.min(1,y/vh);court.style.transform=`translate(-50%,-50%) rotateX(${63-hp*12}deg) rotateZ(${-4+hp*3}deg) scale(${1+hp*.09})`;court.style.opacity=.72-hp*.4}}addEventListener('scroll',animate,{passive:true});animate();
hero?.addEventListener('pointermove',e=>{if(!court)return;const x=(e.clientX/innerWidth-.5)*8,y=(e.clientY/innerHeight-.5)*-5;court.style.filter=`drop-shadow(${x*2}px ${48+y}px 55px rgba(0,0,0,.38))`});
function toast(msg){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.append(t)}t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
function user(){try{return JSON.parse(localStorage.getItem('darUser'))}catch{return null}}
function syncAccount(){const u=user(),a=$('[data-account]');if(a)a.textContent=u?(lang==='ar'?`مرحبًا، ${u.name.split(' ')[0]}`:`Hi, ${u.name.split(' ')[0]}`):I18N[lang].login}
syncAccount();
$$('[data-auth-tab]').forEach(b=>b.addEventListener('click',()=>{$$('[data-auth-tab]').forEach(x=>x.classList.remove('active'));$$('.auth-form').forEach(x=>x.classList.remove('active'));b.classList.add('active');$(`#${b.dataset.authTab}`).classList.add('active')}));
$('#signupForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget),u={name:fd.get('name'),email:fd.get('email')};localStorage.setItem('darUser',JSON.stringify(u));toast(lang==='ar'?'تم إنشاء الحساب بنجاح':'Account created successfully');setTimeout(()=>location.href='booking.html',800)});
$('#loginForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget),name=(fd.get('email')||'Player').split('@')[0];localStorage.setItem('darUser',JSON.stringify({name,email:fd.get('email')}));toast(lang==='ar'?'تم تسجيل الدخول':'Signed in successfully');setTimeout(()=>location.href='booking.html',700)});
$('[data-logout]')?.addEventListener('click',()=>{localStorage.removeItem('darUser');location.reload()});
function bookingGate(){const gate=$('#bookingGate'),form=$('#bookingArea'),u=user();if(!gate||!form)return;if(u){gate.hidden=true;form.hidden=false;$('#userName').textContent=u.name}else{gate.hidden=false;form.hidden=true}}
bookingGate();$$('.slot').forEach(s=>s.addEventListener('click',()=>{if(s.classList.contains('busy'))return;$$('.slot').forEach(x=>x.classList.remove('selected'));s.classList.add('selected');$('#selectedTime').value=s.dataset.time}));
$('#bookingForm')?.addEventListener('submit',e=>{e.preventDefault();if(!$('#selectedTime').value){toast(lang==='ar'?'اختر وقتًا متاحًا أولًا':'Please select an available time');return}toast(lang==='ar'?'تم تأكيد الحجز المبدئي ✓':'Your provisional booking is confirmed ✓');e.currentTarget.reset();$$('.slot').forEach(x=>x.classList.remove('selected'))});
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();toast(lang==='ar'?'تم إرسال رسالتك، شكرًا لك':'Your message has been sent');e.currentTarget.reset()});


// ===== Dar Alpadel immersive interactions v2 =====
(()=>{
  const fine=matchMedia('(pointer:fine)').matches;
  const root=document.documentElement;
  const body=document.body;
  const grid=document.createElement('div');grid.className='motion-grid';body.prepend(grid);
  const flash=document.createElement('div');flash.className='hit-flash';body.append(flash);

  // Player-language ribbon
  const marquee=document.createElement('div');
  marquee.className='padel-marquee';
  const phrases=[{t:'الآن في القويعة',l:'ar'},{t:'اللعبة لها دار',l:'ar'},{t:'دار البادل دائماً معك',l:'ar'},{t:'العب البادل في دار البادل',l:'ar'},{t:'البادل ديما في دار البادل',l:'ar'},{t:'سيطر على الشبكة',l:'ar'},{t:'كل نقطة لها قصة',l:'ar'},{t:'جاهز للمباراة القادمة؟',l:'ar'},{t:'NOW IN AL QAWIYAH',l:'en'},{t:'THE GAME HAS A HOME',l:'en'},{t:'PLAY PADEL AT DAR ALPADEL',l:'en'}];
  marquee.innerHTML=`<div class="padel-marquee-track">${[...phrases,...phrases].map(x=>`<span class="${x.l}">${x.t} <b>●</b></span>`).join('')}</div>`;
  const firstSection=document.querySelector('main .section, body > .section');
  if(firstSection) firstSection.before(marquee);

  // Floating court particles
  for(let i=0;i<10;i++){
    const p=document.createElement('i');p.className='ambient-ball';
    p.style.setProperty('--dur',`${9+Math.random()*12}s`);p.style.setProperty('--delay',`${-Math.random()*10}s`);
    p.style.setProperty('--x1',`${Math.random()*100}vw`);p.style.setProperty('--y1',`${Math.random()*100}vh`);
    p.style.setProperty('--x2',`${Math.random()*100}vw`);p.style.setProperty('--y2',`${Math.random()*100}vh`);
    body.append(p);
  }

  if(fine){
    const cursor=document.createElement('div');cursor.className='padel-cursor';body.append(cursor);
    let tx=innerWidth/2,ty=innerHeight/2,cx=tx,cy=ty,lastTrail=0;
    addEventListener('pointermove',e=>{
      tx=e.clientX;ty=e.clientY;root.style.setProperty('--cursor-x',`${tx}px`);root.style.setProperty('--cursor-y',`${ty}px`);
      const now=performance.now();if(now-lastTrail>45){lastTrail=now;const t=document.createElement('i');t.className='cursor-trail';t.style.left=`${tx}px`;t.style.top=`${ty}px`;body.append(t);setTimeout(()=>t.remove(),600)}
    },{passive:true});
    const loop=()=>{cx+=(tx-cx)*.22;cy+=(ty-cy)*.22;cursor.style.transform=`translate3d(${cx-12}px,${cy-12}px,0) rotate(${(cx+cy)*.15}deg)`;requestAnimationFrame(loop)};loop();
    document.addEventListener('pointerover',e=>{if(e.target.closest('a,button,input,select,textarea,.feature,.kpi,.contact-card'))cursor.classList.add('is-hover')});
    document.addEventListener('pointerout',e=>{if(e.target.closest('a,button,input,select,textarea,.feature,.kpi,.contact-card'))cursor.classList.remove('is-hover')});
    document.addEventListener('click',()=>{flash.classList.remove('play');void flash.offsetWidth;flash.classList.add('play')});
  }

  // Smooth magnetic tilt on cards
  document.querySelectorAll('.feature,.kpi,.contact-card,.panel').forEach(card=>{
    card.addEventListener('pointermove',e=>{if(!fine)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(800px) rotateX(${-y*5}deg) rotateY(${x*7}deg) translateY(-3px)`});
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });

  let last=0;addEventListener('scroll',()=>{const h=document.querySelector('.site-header');h?.classList.toggle('scrolled',scrollY>40);last=scrollY},{passive:true});
})();


// Intro gateway interaction
(()=>{
  if(!document.body.classList.contains('intro-page')) return;
  const enter=document.querySelector('.intro-enter');
  const langBtn=document.querySelector('.intro-lang');
  const content={
    ar:{k:'اللعبة لها دار',h:'هل أنت جاهز<br><span>لدخول الملعب؟</span>',p:'ادخل إلى عالم دار البادل؛ اختر شريكك، واقرأ الملعب، وسيطر على الشبكة، واجعل النقطة القادمة لك.',b:'ابدأ التجربة',hint:'حرّك المؤشر، ثم ادخل الملعب'},
    en:{k:'THE GAME HAS A HOME',h:'Are you ready<br><span>to take the court?</span>',p:'Enter Dar Alpadel. Choose your partner, read the glass, own the net, and make the next point yours.',b:'Start the tour',hint:'Move the pointer, then enter the court'}
  };
  let introLang=localStorage.getItem('darLang')||'ar';
  function paint(){const c=content[introLang];document.documentElement.lang=introLang;document.documentElement.dir=introLang==='ar'?'rtl':'ltr';document.querySelector('.intro-kicker').textContent=c.k;document.querySelector('.intro-content h1').innerHTML=c.h;document.querySelector('.intro-copy').textContent=c.p;enter.querySelector('span').textContent=c.b;document.querySelector('.intro-hint').textContent=c.hint;langBtn.textContent=introLang==='ar'?'EN':'عربي';localStorage.setItem('darLang',introLang)}
  paint();
  langBtn?.addEventListener('click',()=>{introLang=introLang==='ar'?'en':'ar';paint()});
  enter?.addEventListener('click',e=>{e.preventDefault();document.body.classList.add('is-leaving');setTimeout(()=>location.href=enter.href,720)});
  addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*14,y=(e.clientY/innerHeight-.5)*10;document.querySelector('.intro-court-shell')?.style.setProperty('transform',`translate3d(${x}px,${y}px,0)`);document.querySelector('.intro-content')?.style.setProperty('transform',`translate3d(${-x*.25}px,${-y*.25}px,0)`)} ,{passive:true});
})();
