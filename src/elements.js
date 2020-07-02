function elements() {
  return {
    content: document.getElementById('content'),
    homeBtn: document.getElementById('homeBtn'),
    tableBtn: document.getElementById('bookTable'),
    menuBtn: document.getElementById('menuPage'),
    wrapper: document.getElementById('wrapperId'),
    container: document.querySelector('.container'),
    test: document.querySelector('.test'),
    triggers: document.querySelectorAll('.nav-item'),
    background: document.querySelector('.dropdownBackground'),
    nav: document.querySelector('.navbar'),
  };
}

export default { elements };