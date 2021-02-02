window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll-process',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    
    if (window.pageYOffset / (document.body.offsetHeight - window.innerHeight) > 0.16 && window.pageYOffset / (document.body.offsetHeight - window.innerHeight) < 0.23) {
      document.getElementById('h3-process').textContent = "Conception";
      document.getElementById('iphone-bg-process').style.backgroundImage = "url('assets/images/conception-process.svg')";
    } else if (window.pageYOffset / (document.body.offsetHeight - window.innerHeight) > 0.23 && window.pageYOffset / (document.body.offsetHeight - window.innerHeight) < 0.28) {
      document.getElementById('h3-process').textContent = "Design";
      document.getElementById('iphone-bg-process').style.backgroundImage = "url('assets/images/design-process.svg')";
    } else if (window.pageYOffset / (document.body.offsetHeight - window.innerHeight) > 0.29 && window.pageYOffset / (document.body.offsetHeight - window.innerHeight) < 0.36) {
      document.getElementById('h3-process').textContent = "Développement";
      document.getElementById('dev-process-bg').style.backgroundImage = "url('assets/images/bg-dev-process.mov')";
      document.getElementById('iphone-bg-process').style.backgroundImage = "url('assets/images/design-process.svg')";

    } else if (window.pageYOffset / (document.body.offsetHeight - window.innerHeight) > 0.36) {
      document.getElementById('h3-process').textContent = "Déploiement";
      document.getElementById('dev-process-bg').style.backgroundImage = "none";
      document.getElementById('iphone-bg-process').style.backgroundImage = "url('assets/images/deploiement-process.svg')";

    }
    
  }, false);