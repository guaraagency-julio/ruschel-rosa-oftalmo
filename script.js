// Script compartilhado pelas seis páginas; cada controle só inicia quando existe.
const WA='https://wa.me/5551980283131';
const insurers=[
  {name:'AFISVEC',short:'AFISVEC',display:'AFISVEC',color:'#24516b',logo:'assets/convenios/afisvec.svg'},
  {name:'Allianz',short:'Allianz',display:'Allianz',color:'#003781',logo:'assets/convenios/allianz.svg'},
  {name:'Amil',short:'amil',display:'Amil',color:'#0069aa',logo:'assets/convenios/amil.svg'},
  {name:'Bradesco Saúde',short:'bradesco saúde',display:'Bradesco Saúde',color:'#cc1738',logo:'assets/convenios/bradesco-saude.svg'},
  {name:'Cabergs',short:'CABERGS',display:'CABERGS',color:'#315778',logo:'assets/convenios/cabergs.svg'},
  {name:'Caixa Econômica Federal / Saúde Caixa',short:'Saúde Caixa',display:'Saúde Caixa',color:'#0068a0',logo:'assets/convenios/saude-caixa.svg'},
  {name:'Cassi',short:'CASSI',display:'CASSI',color:'#036a6e',logo:'assets/convenios/cassi.svg'},
  {name:'Doctor Clin MAX',short:'Doctor Clin',display:'Doctor Clin MAX',color:'#25728b',logo:'assets/convenios/doctor-clin.svg'},
  {name:'Gama',short:'GAMA',display:'GAMA',color:'#1e6472',logo:'assets/convenios/gama.svg'},
  {name:'Geap',short:'GEAP',display:'GEAP',color:'#1579a1',logo:'assets/convenios/geap.svg'},
  {name:'Golden Cross',short:'Golden Cross',display:'Golden Cross',color:'#b29243',logo:'assets/convenios/golden-cross.svg'},
  {name:'Ipasem C.B.',short:'IPASEM C.B.',display:'IPASEM C.B.',color:'#366475',logo:'assets/convenios/ipasem-cb.svg'},
  {name:'Ipasem NH',short:'IPASEM NH',display:'IPASEM NH',color:'#366475',logo:'assets/convenios/ipasem-nh.svg'},
  {name:'Irmãs ACSC',short:'Irmãs ACSC',display:'Irmãs ACSC',color:'#7e5574',logo:'assets/convenios/irmas-acsc.svg'},
  {name:'Life Empresarial Saúde',short:'Life Saúde',display:'Life Saúde',color:'#39775b',logo:'assets/convenios/life-saude.svg'},
  {name:'Mediservice',short:'Mediservice',display:'Mediservice',color:'#3065a0',logo:'assets/convenios/mediservice.svg'},
  {name:'Onmed',short:'ONMED',display:'ONMED',color:'#42778b',logo:'assets/convenios/onmed.svg'},
  {name:'Particular',short:'Particular',display:'Atendimento Particular',color:'#97734c',logo:'assets/convenios/particular.svg'},
  {name:'Petrobrás Saúde',short:'Petrobras Saúde',display:'Petrobras Saúde',color:'#0b735c',logo:'assets/convenios/petrobras-saude.svg'},
  {name:'Postal Saúde / Correios',short:'Postal Saúde',display:'Postal Saúde',color:'#125a9d',logo:'assets/convenios/postal-saude.svg'},
  {name:'Proasa',short:'PROASA',display:'PROASA',color:'#34678d',logo:'assets/convenios/proasa.svg'},
  {name:'SaudePas',short:'SaudePas',display:'SaudePas',color:'#5a7b62',logo:'assets/convenios/saudepas.svg'},
  {name:'SulAmérica',short:'SulAmérica',display:'SulAmérica',color:'#dc722c',logo:'assets/convenios/sulamerica.svg'},
  {name:'Unimed',short:'Unimed',display:'Unimed',color:'#008e69',logo:'assets/convenios/unimed.svg'},
  {name:'Usisaúde',short:'Usisaúde',display:'Usisaúde',color:'#5b80a9',logo:'assets/convenios/usisaude.svg'}
];

// Navegação desktop/mobile
const menuToggle=document.querySelector('#menu-toggle');
const mobileMenu=document.querySelector('#mobile-menu');
if(menuToggle && mobileMenu){
  const closeMenu=()=>{
    mobileMenu.classList.remove('open');
    mobileMenu.inert=true;
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Abrir menu');
    menuToggle.querySelector('use')?.setAttribute('href','#i-menu');
  };
  menuToggle.addEventListener('click',()=>{
    const open=mobileMenu.classList.toggle('open');
    mobileMenu.inert=!open;
    document.body.classList.toggle('menu-open',open);
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
    menuToggle.querySelector('use')?.setAttribute('href',open?'#i-x':'#i-menu');
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&mobileMenu.classList.contains('open')){
      closeMenu();menuToggle.focus();
    }
  });
  window.matchMedia('(min-width: 1251px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
}
// Navegação por abas de especialidade
const tabButtons=[...document.querySelectorAll('.specialty-tab')];
function activateTab(key,focus=false){
  tabButtons.forEach(btn=>{
    const selected=btn.dataset.tab===key;
    btn.classList.toggle('is-active',selected);
    btn.setAttribute('aria-selected',String(selected));
    btn.tabIndex=selected?0:-1;
    if(selected && focus)btn.focus();
  });
  document.querySelectorAll('.specialty-panel').forEach(panel=>{
    const selected=panel.id===`panel-${key}`;
    panel.hidden=!selected;
    panel.classList.toggle('active',selected);
  });
}
tabButtons.forEach((btn,i)=>{
  btn.addEventListener('click',()=>activateTab(btn.dataset.tab));
  btn.addEventListener('keydown',e=>{
    if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'].includes(e.key)){
      e.preventDefault();
      const next=e.key==='Home'?0:e.key==='End'?tabButtons.length-1:
        (i+(e.key==='ArrowDown'||e.key==='ArrowRight'?1:-1)+tabButtons.length)%tabButtons.length;
      activateTab(tabButtons[next].dataset.tab,true);
    }
  });
});

// Convênios: marca/operadora local, pesquisa e faixa de logos
const insuranceGrid=document.querySelector('#insurance-grid');
if(insuranceGrid){
  const count=document.querySelector('#insurance-count');
  const empty=document.querySelector('#insurance-empty');
  const search=document.querySelector('#insurance-query');
  const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function insuranceCard(insurance){
    const card=document.createElement('div');
    card.className='insurance-card';
    card.style.setProperty('--brand-color',insurance.color);
    if(insurance.display.length>17)card.dataset.long='true';
    const mark=document.createElement('div');mark.className='insurance-logo-wrap';
    const img=document.createElement('img');
    img.className='logo-image';img.src=insurance.logo;img.alt=`Identidade visual ${insurance.display}`;
    img.width=180;img.height=68;img.loading='lazy';img.decoding='async';
    mark.append(img);
    const label=document.createElement('span');label.className='insurance-name';label.textContent=insurance.display;
    card.append(mark,label);
    card.setAttribute('aria-label',insurance.name);
    return card;
  }
  function renderInsurers(query=''){
    const items=insurers.filter(i=>normalize(i.name+' '+i.short+' '+i.display).includes(normalize(query.trim())));
    const fragment=document.createDocumentFragment();
    items.forEach(i=>fragment.append(insuranceCard(i)));
    insuranceGrid.replaceChildren(fragment);
    count.textContent=`${items.length} ${items.length===1?'opção listada':'opções listadas'}`;
    empty.hidden=items.length!==0;
  }
  renderInsurers();
  search?.addEventListener('input',()=>renderInsurers(search.value));
  const marquee=document.querySelector('#insurance-band-track');
  const featured=['Unimed','Bradesco Saúde','Amil','SulAmérica','Allianz','Cassi','Doctor Clin MAX','Geap'];
  if(marquee){
    for(let repeat=0;repeat<2;repeat++){
      featured.forEach(name=>{
        const item=insurers.find(i=>i.name===name);
        if(!item)return;
        const wrapper=document.createElement('div');wrapper.className='insurance-band-item';
        wrapper.setAttribute('aria-hidden','true');
        const img=document.createElement('img');img.src=item.logo;img.alt='';img.loading='lazy';
        wrapper.append(img);marquee.append(wrapper);
      });
    }
  }
}

const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
// Galeria fotográfica
const galleryTrack=document.querySelector('#gallery-track');
if(galleryTrack){
  const slides=[...galleryTrack.querySelectorAll('.gallery-card')];
  const counter=document.querySelector('#gallery-count');
  const slideIndex=()=>{
    let best=0,nearest=Infinity;
    slides.forEach((slide,i)=>{
      const distance=Math.abs(slide.offsetLeft-galleryTrack.scrollLeft-galleryTrack.offsetLeft);
      if(distance<nearest){nearest=distance;best=i;}
    });
    return best;
  };
  const update=()=>{if(counter)counter.textContent=`${String(slideIndex()+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;};
  const move=step=>{
    const index=Math.max(0,Math.min(slides.length-1,slideIndex()+step));
    slides[index]?.scrollIntoView({behavior:prefersReducedMotion.matches?'auto':'smooth',block:'nearest',inline:'start'});
  };
  document.querySelector('#gallery-prev')?.addEventListener('click',()=>move(-1));
  document.querySelector('#gallery-next')?.addEventListener('click',()=>move(1));
  galleryTrack.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update,{passive:true});
  update();
}

// Carrossel de avaliações
const reviewTrack=document.querySelector('#reviews-track');
if(reviewTrack){
  const cards=[...reviewTrack.querySelectorAll('.review-card')];
  const position=document.querySelector('#reviews-position');
  const prev=document.querySelector('#reviews-prev');
  const next=document.querySelector('#reviews-next');
  const getIndex=()=>{
    let result=0,distance=Infinity;
    cards.forEach((card,index)=>{
      const d=Math.abs(card.offsetLeft-cards[0].offsetLeft-reviewTrack.scrollLeft);
      if(d<distance){distance=d;result=index;}
    });
    return result;
  };
  const update=()=>{
    const index=getIndex();
    if(position)position.textContent=`${String(index+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
    if(prev)prev.disabled=index===0;
    if(next)next.disabled=index===cards.length-1;
  };
  const move=direction=>{
    const index=Math.max(0,Math.min(cards.length-1,getIndex()+direction));
    cards[index]?.scrollIntoView({behavior:prefersReducedMotion.matches?'auto':'smooth',block:'nearest',inline:'start'});
  };
  prev?.addEventListener('click',()=>move(-1));
  next?.addEventListener('click',()=>move(1));
  reviewTrack.addEventListener('scroll',update,{passive:true});
  reviewTrack.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
      e.preventDefault();move(e.key==='ArrowRight'?1:-1);
    }
  });
  window.addEventListener('resize',update,{passive:true});update();
}

// Barra de agendamento fixa, exibida depois do primeiro bloco de conteúdo
const mobileSticky=document.querySelector('.mobile-sticky');
const firstSection=document.querySelector('main > section');
if(mobileSticky && firstSection && 'IntersectionObserver' in window){
  const watcher=new IntersectionObserver(([entry])=>{
    mobileSticky.classList.toggle('is-visible',!entry.isIntersecting);
  },{threshold:0});
  watcher.observe(firstSection);
}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

// Motion editorial preservado nas rotas individuais
const reveals=[...document.querySelectorAll('[data-reveal]')];
let revealObserver;
function setupReveals(){
  revealObserver?.disconnect();
  if(prefersReducedMotion.matches || !('IntersectionObserver' in window)){
    document.documentElement.classList.remove('motion-enabled');
    reveals.forEach(el=>el.classList.add('is-inview'));
    return;
  }
  const vh=window.innerHeight;
  reveals.forEach(el=>{
    const box=el.getBoundingClientRect();
    if(box.top<vh*.93&&box.bottom>0)el.classList.add('is-inview');
  });
  document.documentElement.classList.add('motion-enabled');
  revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(({target,isIntersecting})=>{
      if(isIntersecting){target.classList.add('is-inview');revealObserver.unobserve(target);}
    });
  },{rootMargin:'0px 0px -9% 0px',threshold:.06});
  reveals.filter(el=>!el.classList.contains('is-inview')).forEach(el=>revealObserver.observe(el));
}
setupReveals();

const progress=document.querySelector('.scroll-progress');
const heroPhoto=document.querySelector('.hero-visual');
const eyeSymbol=document.querySelector('.about-graphic');
const aboutPortrait=document.querySelector('.about-photo img');
const galleryPhotos=[...document.querySelectorAll('.gallery-card img')];
let animationFrame=0;
function renderScrollMotion(){
  animationFrame=0;
  const scrollTotal=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  if(progress)progress.style.transform=`scaleX(${Math.max(0,Math.min(1,window.scrollY/scrollTotal))})`;
  if(prefersReducedMotion.matches)return;
  if(heroPhoto){
    const t=Math.min(1,Math.max(0,window.scrollY/Math.max(1,heroPhoto.offsetHeight)));
    heroPhoto.style.setProperty('--hero-scale',(1+t*.105).toFixed(4));
    heroPhoto.style.setProperty('--hero-shift',`${(t*-12).toFixed(1)}px`);
  }
  if(eyeSymbol){
    const r=eyeSymbol.getBoundingClientRect();
    if(r.top<window.innerHeight+150&&r.bottom>-150){
      const travel=(window.innerHeight*.5-r.top-r.height*.5)/window.innerHeight;
      eyeSymbol.style.setProperty('--eye-rotation',`${Math.max(-7,Math.min(7,travel*10)).toFixed(2)}deg`);
    }
  }
  if(aboutPortrait){
    const r=aboutPortrait.getBoundingClientRect();
    if(r.top<window.innerHeight&&r.bottom>0){
      const t=(window.innerHeight-r.top)/(window.innerHeight+r.height);
      aboutPortrait.style.setProperty('--portrait-scale',(1.025+Math.min(.045,Math.max(0,t)*.045)).toFixed(3));
    }
  }
  galleryPhotos.forEach(img=>{
    const r=img.getBoundingClientRect();
    if(r.top>window.innerHeight+50||r.bottom<-50)return;
    const d=Math.min(1,Math.abs(r.top+r.height/2-window.innerHeight/2)/(window.innerHeight+r.height));
    img.style.setProperty('--gallery-scale',(1.012+d*.075).toFixed(4));
  });
}
function scheduleMotion(){if(!animationFrame)animationFrame=requestAnimationFrame(renderScrollMotion)}
window.addEventListener('scroll',scheduleMotion,{passive:true});
window.addEventListener('resize',scheduleMotion,{passive:true});
galleryTrack?.addEventListener('scroll',scheduleMotion,{passive:true});
prefersReducedMotion.addEventListener('change',()=>{
  if(prefersReducedMotion.matches){
    heroPhoto?.style.removeProperty('--hero-scale');
    heroPhoto?.style.removeProperty('--hero-shift');
    eyeSymbol?.style.removeProperty('--eye-rotation');
    aboutPortrait?.style.removeProperty('--portrait-scale');
    galleryPhotos.forEach(img=>img.style.removeProperty('--gallery-scale'));
  }
  setupReveals();scheduleMotion();
});
scheduleMotion();
