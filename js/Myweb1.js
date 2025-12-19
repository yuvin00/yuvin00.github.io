  const hero = document.getElementById('hero');
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-page]');
  const homeBtn = document.getElementById('homeBtn');

  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const drawerHome = document.getElementById('drawerHome');

  function showHome(){
    hero.style.display = 'block';
    pages.forEach(p => p.classList.remove('active'));
    document.body.classList.add('no-scroll');
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  }

  function showPage(id){
    hero.style.display = 'none';
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.body.classList.remove('no-scroll');
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  }

  navLinks.forEach(link=>{
    link.addEventListener('click', ()=>showPage(link.dataset.page));
  });

  homeBtn.onclick = showHome;
  drawerHome.onclick = showHome;

  menuBtn.onclick = ()=>{
    drawer.classList.add('open');
    overlay.classList.add('show');
  };

  overlay.onclick = ()=>{
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  };

  const slides = document.querySelectorAll('.hero-image');
  let idx = 0;
  setInterval(()=>{
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 10000);

  showHome();

  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.gallery-item').forEach(img=>{
    img.onclick = ()=>{
      modalImg.src = img.src;
      modal.classList.add('show');
    };
  });

  modalClose.onclick = ()=>modal.classList.remove('show');
  modal.onclick = e=>{
    if(e.target === modal) modal.classList.remove('show');
  };