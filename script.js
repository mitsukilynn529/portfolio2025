document.addEventListener('DOMContentLoaded', function () {
    console.log("JSは読み込まれています");
    
    modalTriggers();
  
    // スムーススクロール
    document.querySelectorAll('nav a,.top-a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // スクロール時のフェードイン
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });
  
    document.querySelectorAll('.section').forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  
    // フォーム送信時のアラート
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('お問い合わせありがとうございます！');
        this.reset();
      });
    }
  
  });

  // モーダルウィンドウ
  function modalTriggers() {
    const modals = document.querySelectorAll(".modal");
    const openBtns = document.querySelectorAll(".open-modal");
    const closeBtns = document.querySelectorAll(".close-btn");
  
    openBtns.forEach(button => {
      button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      openModal(modalId);
    });
  });

    closeBtns.forEach(button => {
      button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      closeModal(modalId);
      });
    });

    modals.forEach(modal => {
      modal.addEventListener('click', e => {
          if (e.target.classList.contains('modal')) {
              modal.classList.remove('active');
          }
      });
  });
}

//指定したIDのモーダルを開く関数
function openModal(modalId) {
  const modal = document.getElementById(`modal-${modalId}`);
  if (modal) {
      modal.classList.add('active');
  }
}


//指定したIDのモーダルを閉じる関数
function closeModal(modalId) {
  const modal = document.getElementById(`modal-${modalId}`);
  if (modal) {
      modal.classList.remove('active');
  }
}
