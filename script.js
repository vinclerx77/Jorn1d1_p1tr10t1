if(typeof IntersectionObserver!=="function"){window.IntersectionObserver=class{observe(e){e.classList&&e.classList.add("in")}unobserve(){}}}
setTimeout(()=>document.querySelectorAll(".rv:not(.in),.line:not(.in)").forEach(e=>e.classList.add("in")),6000);
const CHECKOUT_URL="https://syncpaycheckout.com/checkout/a2ec33d1-d4c0-44a7-8066-72036256505e+a2ec3366-0a47-4a13-8247-5f417a926c75";
document.querySelectorAll('[data-cta]').forEach(a=>a.href=CHECKOUT_URL);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv,.line').forEach(e=>io.observe(e));
const bar=document.getElementById('bar'),fc=document.getElementById('fcta'),fin=document.getElementById('final');
function p(){const m=document.documentElement.scrollHeight-innerHeight,r=scrollY/m;bar.style.transform='scaleX('+r+')';fc.classList.toggle('on',r>.02&&fin.getBoundingClientRect().top>innerHeight*.9)}
addEventListener('scroll',p,{passive:true});p();

(function(){const ph=document.getElementById('ph'),pi=ph.querySelector('.pimg'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;let man=0;
function set(x,y){ph.style.setProperty('--mx',x+'px');ph.style.setProperty('--my',y+'px')}
function pt(e){const r=ph.getBoundingClientRect(),q=e.touches?e.touches[0]:e;set(q.clientX-r.left,q.clientY-r.top);man=performance.now()}
ph.addEventListener('pointermove',pt);ph.addEventListener('touchmove',pt,{passive:true});
let vis=true;new IntersectionObserver(e=>{vis=e[0].isIntersecting}).observe(ph);
function loop(n){if(vis&&n-man>2500){const r=ph.getBoundingClientRect();const k=n/1800;set(r.width*(.5+.3*Math.sin(k)),r.height*(.5+.25*Math.sin(k*1.7+1)))}requestAnimationFrame(loop)}
if(!rm)requestAnimationFrame(loop);else set(ph.clientWidth*.5,ph.clientHeight*.5);
let tk=0;const px=[document.querySelector('.black'),document.getElementById('final')];addEventListener('scroll',()=>{if(tk)return;tk=1;requestAnimationFrame(()=>{tk=0;px.forEach(e=>e.style.setProperty('--sy',scrollY));if(!rm&&scrollY<innerHeight*1.3)pi.style.translate='0 '+(scrollY*.12)+'px'})},{passive:true});
const cu=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;cu.unobserve(x.target);if(rm)return;const el=x.target,to=+el.dataset.count,s0=performance.now();(function f(n){const k=Math.min((n-s0)/1400,1),v=to*(1-Math.pow(1-k,3));el.textContent='R$ '+v.toFixed(1).replace('.',',')+' bi';if(k<1)requestAnimationFrame(f)})(s0)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(e=>cu.observe(e))})();
