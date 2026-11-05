const WA='https://wa.me/5551980283131';
const insurers=[
  {name:'AFISVEC',short:'AFISVEC',color:'#24516b'},
  {name:'Allianz',short:'Allianz',color:'#003781',domain:'allianz.com.br'},
  {name:'Amil',short:'amil',color:'#0069aa',domain:'amil.com.br'},
  {name:'Bradesco Saúde',short:'bradesco saúde',color:'#cc1738',domain:'bradescoseguros.com.br'},
  {name:'Cabergs',short:'CABERGS',color:'#315778',domain:'cabergs.org.br'},
  {name:'Caixa Econômica Federal / Saúde Caixa',short:'Saúde Caixa',color:'#0068a0',domain:'caixa.gov.br'},
  {name:'Cassi',short:'CASSI',color:'#036a6e',domain:'cassi.com.br'},
  {name:'Doctor Clin MAX',short:'Doctor Clin',color:'#25728b',domain:'doctorclin.com.br'},
  {name:'Gama',short:'GAMA',color:'#1e6472'},
  {name:'Geap',short:'GEAP',color:'#1579a1',domain:'geap.org.br'},
  {name:'Golden Cross',short:'Golden Cross',color:'#b29243',domain:'goldencross.com.br'},
  {name:'Ipasem C.B.',short:'IPASEM C.B.',color:'#366475'},
  {name:'Ipasem NH',short:'IPASEM NH',color:'#366475'},
  {name:'Irmãs ACSC',short:'Irmãs ACSC',color:'#7e5574'},
  {name:'Life Empresarial Saúde',short:'Life Saúde',color:'#39775b'},
  {name:'Mediservice',short:'Mediservice',color:'#3065a0',domain:'mediservice.com.br'},
  {name:'Onmed',short:'ONMED',color:'#42778b'},
  {name:'Particular',short:'Particular',color:'#97734c'},
  {name:'Petrobrás Saúde',short:'Petrobras Saúde',color:'#0b735c',domain:'petrobras.com.br'},
  {name:'Postal Saúde / Correios',short:'Postal Saúde',color:'#125a9d',domain:'postalsaude.com.br'},
  {name:'Proasa',short:'PROASA',color:'#34678d'},
  {name:'SaudePas',short:'SaudePas',color:'#5a7b62'},
  {name:'SulAmérica',short:'SulAmérica',color:'#dc722c',domain:'sulamerica.com.br'},
  {name:'Unimed',short:'Unimed',color:'#008e69',domain:'unimed.coop.br'},
  {name:'Usisaúde',short:'Usisaúde',color:'#5b80a9'}
];
const menuToggle=document.querySelector('#menu-toggle');const mobileMenu=document.querySelector('#mobile-menu');
function closeMenu(){mobileMenu.classList.remove('open');mobileMenu.inert=true;document.body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');menuToggle.querySelector('use').setAttribute('href','#i-menu')}
menuToggle.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');mobileMenu.inert=!open;document.body.classList.toggle('menu-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menuToggle.querySelector('use').setAttribute('href',open?'#i-x':'#i-menu')});
mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobileMenu.classList.contains('open')){closeMenu();menuToggle.focus()}});window.matchMedia('(min-width: 1001px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
const tabButtons=[...document.querySelectorAll('.specialty-tab')];function activateTab(key,focus=false){tabButtons.forEach(btn=>{const selected=btn.dataset.tab===key;btn.classList.toggle('is-active',selected);btn.setAttribute('aria-selected',String(selected));btn.tabIndex=selected?0:-1;if(selected&&focus)btn.focus()});document.querySelectorAll('.specialty-panel').forEach(panel=>{const selected=panel.id===`panel-${key}`;panel.hidden=!selected;panel.classList.toggle('active',selected)})}tabButtons.forEach((btn,i)=>{btn.addEventListener('click',()=>activateTab(btn.dataset.tab));btn.addEventListener('keydown',e=>{if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?tabButtons.length-1:(i+(e.key==='ArrowDown'||e.key==='ArrowRight'?1:-1)+tabButtons.length)%tabButtons.length;activateTab(tabButtons[next].dataset.tab,true)}})});
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const grid=document.querySelector('#insurance-grid'),count=document.querySelector('#insurance-count'),empty=document.querySelector('#insurance-empty'),search=document.querySelector('#insurance-query');
// The nameplates are intentionally self-contained. For brands with validated public websites,
// show a favicon as an accent; fallback remains accessible if the remote icon does not load.
function makeInsuranceCard(insurance){const card=document.createElement('div');card.className='insurance-card';card.style.setProperty('--brand-color',insurance.color);if(insurance.name.length>18)card.dataset.long='true';let mark=document.createElement('span');mark.className='logo-fallback';mark.textContent=insurance.short.slice(0,1).toUpperCase();mark.setAttribute('aria-hidden','true');if(insurance.domain){const img=document.createElement('img');img.className='logo-image';img.width=33;img.height=33;img.alt='';img.loading='lazy';img.referrerPolicy='no-referrer';img.addEventListener('load',()=>{if(img.naturalWidth>0){mark.replaceWith(img)}});img.addEventListener('error',()=>{img.remove()});img.src=`https://www.google.com/s2/favicons?domain=${encodeURIComponent(insurance.domain)}&sz=128`;}const label=document.createElement('span');label.className='insurance-name';label.textContent=insurance.short;card.append(mark,label);card.setAttribute('aria-label',insurance.name);return card}
function renderInsurers(query=''){const items=insurers.filter(i=>normalize(i.name).includes(normalize(query.trim())));const fragment=document.createDocumentFragment();items.forEach(i=>fragment.append(makeInsuranceCard(i)));grid.replaceChildren(fragment);count.textContent=`${items.length} ${items.length===1?'opção listada':'opções listadas'}`;empty.hidden=items.length!==0}
renderInsurers();search.addEventListener('input',()=>renderInsurers(search.value));
const marquee=document.querySelector('#insurance-band-track');const featured=['Unimed','Bradesco Saúde','Amil','SulAmérica','Allianz','Cassi','Doctor Clin MAX','Geap'];const items=featured.map(n=>insurers.find(i=>i.name===n));for(let i=0;i<2;i++)items.forEach(ins=>{const label=document.createElement('div');label.className='insurance-band-item';label.style.color=ins.color;const mark=document.createElement('span');mark.style.borderRadius=ins.name==='Unimed'?'40% 40% 0 40%':'50%';label.append(mark,document.createTextNode(ins.short));marquee.append(label)});
const track=document.querySelector('#gallery-track'),slides=[...track.querySelectorAll('.gallery-card')],counter=document.querySelector('#gallery-count');function currentSlide(){let i=0;let distance=Infinity;slides.forEach((s,n)=>{const d=Math.abs(s.offsetLeft-track.scrollLeft-track.offsetLeft);if(d<distance){distance=d;i=n}});return i}function updateCounter(){counter.textContent=`${String(currentSlide()+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`}function moveGallery(direction){const i=currentSlide();const next=Math.max(0,Math.min(slides.length-1,i+direction));slides[next].scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest',inline:'start'})}document.querySelector('#gallery-prev').addEventListener('click',()=>moveGallery(-1));document.querySelector('#gallery-next').addEventListener('click',()=>moveGallery(1));track.addEventListener('scroll',updateCounter,{passive:true});window.addEventListener('resize',updateCounter);updateCounter();
document.querySelector('#year').textContent=new Date().getFullYear();

// Show the persistent booking CTA only after the opening presentation has left the viewport.
const heroSection=document.querySelector('.hero'),mobileSticky=document.querySelector('.mobile-sticky');
const stickyObserver=new IntersectionObserver(entries=>{mobileSticky.classList.toggle('is-visible',!entries[0].isIntersecting)},{threshold:0});stickyObserver.observe(heroSection);


/* Cinema editorial: animações vinculadas ao scroll (sem dependências externas).
   Elementos começam visíveis no CSS base. Respeita redução de movimento. */
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const reveals=[...document.querySelectorAll('[data-reveal]')];
let revealObserver;
function setupReveals(){
  if(revealObserver){revealObserver.disconnect();revealObserver=undefined;}
  if(motionPreference.matches || !('IntersectionObserver' in window)){
    document.documentElement.classList.remove('motion-enabled');
    reveals.forEach(el=>el.classList.add('is-inview'));
    return;
  }
  // Marcação antes de ativar o CSS para evitar movimento de volta em elementos já visíveis.
  const viewportHeight=window.innerHeight;
  reveals.forEach(el=>{
    const box=el.getBoundingClientRect();
    if(box.top<viewportHeight*.93 && box.bottom>0)el.classList.add('is-inview');
  });
  document.documentElement.classList.add('motion-enabled');
  revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(({target,isIntersecting})=>{
      if(isIntersecting){target.classList.add('is-inview');revealObserver.unobserve(target);}
    });
  },{rootMargin:'0px 0px -9% 0px',threshold:0.06});
  reveals.filter(el=>!el.classList.contains('is-inview')).forEach(el=>revealObserver.observe(el));
}
setupReveals();
const progress=document.querySelector('.scroll-progress');
const heroPhoto=document.querySelector('.hero-visual');
const eyeSymbol=document.querySelector('.about-graphic');
const galleryPhotos=[...document.querySelectorAll('.gallery-card img')];
let scrollFrame=0;
function renderScrollMotion(){
  scrollFrame=0;
  const doc=document.documentElement;
  const totalScroll=Math.max(1,doc.scrollHeight-window.innerHeight);
  progress.style.transform=`scaleX(${Math.min(1,Math.max(0,window.scrollY/totalScroll))})`;
  if(motionPreference.matches)return;
  // Suaves mudanças de escala ligadas à distância efetiva de rolagem, sempre limitadas.
  const heroProgress=Math.min(1,Math.max(0,window.scrollY/Math.max(1,heroPhoto.offsetHeight)));
  heroPhoto.style.setProperty('--hero-scale',(1+heroProgress*.105).toFixed(4));
  heroPhoto.style.setProperty('--hero-shift',`${(heroProgress*-12).toFixed(1)}px`);
  const eyeBox=eyeSymbol.getBoundingClientRect();
  if(eyeBox.top<window.innerHeight+150 && eyeBox.bottom>-150){
    const travel=(window.innerHeight*.5-eyeBox.top-eyeBox.height*.5)/window.innerHeight;
    eyeSymbol.style.setProperty('--eye-rotation',`${Math.max(-7,Math.min(7,travel*10)).toFixed(2)}deg`);
    eyeSymbol.style.setProperty('--eye-scale',(1.005+Math.max(0,Math.min(.08,(travel+.35)*.06))).toFixed(3));
  }
  galleryPhotos.forEach(img=>{
    const r=img.getBoundingClientRect();
    if(r.top>window.innerHeight+50||r.bottom<-50)return;
    const midpoint=r.top+r.height/2;
    const centerDistance=Math.min(1,Math.abs(midpoint-window.innerHeight/2)/(window.innerHeight+r.height));
    img.style.setProperty('--gallery-scale',(1.012+centerDistance*.075).toFixed(4));
  });
}
function scheduleScrollMotion(){if(!scrollFrame)scrollFrame=requestAnimationFrame(renderScrollMotion);}
window.addEventListener('scroll',scheduleScrollMotion,{passive:true});
window.addEventListener('resize',scheduleScrollMotion,{passive:true});
track.addEventListener('scroll',scheduleScrollMotion,{passive:true});
motionPreference.addEventListener('change',()=>{
  if(motionPreference.matches){heroPhoto.style.removeProperty('--hero-scale');heroPhoto.style.removeProperty('--hero-shift');eyeSymbol.style.removeProperty('--eye-rotation');eyeSymbol.style.removeProperty('--eye-scale');galleryPhotos.forEach(i=>i.style.removeProperty('--gallery-scale'));}
  setupReveals();scheduleScrollMotion();
});
scheduleScrollMotion();