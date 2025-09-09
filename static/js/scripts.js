document.addEventListener('DOMContentLoaded', function () {
  const toggles = Array.from(document.querySelectorAll('.mobile-menu-toggle'));
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const mobileLinks = Array.from(document.querySelectorAll('.mobile-menu a'));

  function openMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggles.forEach(t => t.setAttribute('aria-expanded', 'true'));
    mobileMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    toggles.forEach(t => t.setAttribute('aria-expanded', 'false'));
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  toggles.forEach(btn => btn.addEventListener('click', function (e) {
    if (mobileMenu.classList.contains('active')) closeMenu();
    else openMenu();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  const modal = document.getElementById('certificates-modal');
  const modalClose = document.querySelector('.modal-close');
  const certificatesContainer = document.getElementById('certificates-container');
  const modalTitle = document.getElementById('modal-title');
  
  const certificates = {
    bukova: [
      { title: 'Сертификат МСФО №019', image: 'static/img/person2/mfso.jpg' },
      { title: 'приложение к сертификату МСФО', image: 'static/img/person2/dop_mfso.jpg'},
      { title: 'практика трансформация МСФО', image: 'static/img/person2/practica_mfso.png' }
    ],
    butko: [
      { title: 'Сертификат МСФО №019', image: 'static/img/person1/mfso.jpg' },
      { title: 'приложение к сертификату МСФО', image: 'static/img/person1/dop_mfso.jpg' },
      { title: 'практика трансформация МСФО', image: 'static/img/person1/practica_mfso.png' }
    ]
  };

  function openModal(person) {
    const personData = certificates[person];
    const personName = person === 'bukova' ? 'Букова Ольга Сергеевна' : 'Бутько Светлана Сергеевна';
    
    modalTitle.textContent = `Сертификаты - ${personName}`;
    certificatesContainer.innerHTML = '';
    
    personData.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'bg-gray-100 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105';
        certElement.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div class="p-4">
                <h4 class="font-semibold">${cert.title}</h4>
            </div>
        `;
        
        certElement.addEventListener('click', function() {
            window.open(cert.image, '_blank');
        });
        
        certificatesContainer.appendChild(certElement);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.view-certificates').forEach(btn => {
    btn.addEventListener('click', function() {
      const person = this.getAttribute('data-person');
      openModal(person);
    });
  });

  modalClose.addEventListener('click', closeModal);
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  const mq = window.matchMedia('(min-width:1024px)');
  function mqHandler(e) {
    if (e.matches) closeMenu();
  }
  if (mq.addEventListener) mq.addEventListener('change', mqHandler);
  else mq.addListener(mqHandler);
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.download-link').forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const filename = this.getAttribute('data-filename');
        
        const downloadLink = document.createElement('a');
        downloadLink.href = 'static/documents/' + filename;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        });
    });
});

document.fonts.ready.then(function() {
  document.documentElement.classList.add('font-loaded');
});

setTimeout(function() {
  document.documentElement.classList.add('font-loaded');
}, 1000);