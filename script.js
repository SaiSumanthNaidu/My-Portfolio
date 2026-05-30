function goTo(id, clickedEl){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a=>a.classList.remove('active'));
  if(clickedEl){
    const txt=clickedEl.textContent.trim();
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a=>{
      if(a.textContent.trim()===txt)a.classList.add('active');
    });
  }
  window.scrollTo({top:0,behavior:'smooth'});
  return false;
}

function toggleMenu(){
  document.getElementById('mobileNav').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobileNav').classList.remove('open');
}

function handleSubmit(btn){
  btn.textContent='Message Sent ✓';
  btn.style.background='var(--accent3)';
  btn.style.color='var(--ink)';
  setTimeout(()=>{
    btn.textContent='Send Message →';
    btn.style.background='';btn.style.color='';
  },3000);
}
