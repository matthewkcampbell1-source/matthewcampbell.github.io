// Small interactions: reveal on scroll & smooth anchor behavior
document.addEventListener('DOMContentLoaded', function(){
  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('active');
    });
  }, {threshold: 0.15});
  reveals.forEach(r => obs.observe(r));

  // smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
