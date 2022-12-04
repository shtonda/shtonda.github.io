//######                                                                                        DATA OBJECT
const dataOfPages = {
  mainPage: {
    ua: {
      title: 'Чарівні нігті - Головна',
      header1: 'Головна',
      intro: 'Нігті',
      header2: '',
      subtitleGel: '',
      subtitlePudra: '',
    },
    pl: {
      title: 'Magiczne paznokcie - Główna',
      header1: 'Główna',
      intro: 'paznokcie',
      header2: '',
      subtitleGel: '',
      subtitlePudra: '',
    },
  },
  gelPage: {
    ua: {
      title: 'Чарівні нігті - Гель',
      header1: 'Що таке гель?',
      intro: 'Гель - ...',
      header2: '',
    },
    pl: {
      title: 'Magiczne paznokcie - Żel',
      header1: 'Co to jest żel?',
      intro: 'Żel - ...',
      header2: '',
    },
  },
  pudraPage: {
    ua: {
      title: 'Чарівні нігті - Пудра',
      header1: 'Що таке пудра?',
      intro: 'Пудра - ...',
      header2: '',
    },
    pl: {
      title: 'Magiczne paznokcie - Proszek',
      header1: 'Co to jest proszek?',
      intro: 'Proszek - ...',
      header2: '',
    },
  },
};

//######                                                                                        RENDER_PAGE_FUCNTION
const headerOne = document.getElementsByTagName('h1');
const phrase = document.getElementsByTagName('p');

const renderPage = (lang, page) => {
  if (page === 'main') {
    headerOne[0].innerText = dataOfPages.mainPage[lang].header1;
    phrase[0].innerText = dataOfPages.mainPage[lang].intro;
  } else if (page === 'what-is-gel') {
    headerOne[0].innerText = dataOfPages.gelPage[lang].header1;
    phrase[0].innerText = dataOfPages.gelPage[lang].intro;
  } else if (page === 'what-is-pudra') {
    headerOne[0].innerText = dataOfPages.pudraPage[lang].header1;
    phrase[0].innerText = dataOfPages.pudraPage[lang].intro;
  } else {
    console.log('page doesn`t exist');
  }
};

//######                                                                                        CHANGE_LANG_FUNCTION
//uses by buttons
const changeLang = (lang) => {
  localStorage.setItem('language', lang);
  console.log(localStorage.getItem('language'));
  renderPage(localStorage.getItem('language'), localStorage.getItem('page'));
};

//######                                                                                        START_FUNCTION
//uses by event onload
const start = (page) => {
  localStorage.setItem('page', page);
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'pl');
    renderPage(localStorage.getItem('language'), localStorage.getItem('page'));
  } else {
    renderPage(localStorage.getItem('language'), localStorage.getItem('page'));
  }
};

//######                                                                                        HIDE/SHOW OTHER BUTTONS FUNCTION
let switcher = 0;
const hideShowBtns = () => {
  const btnUP = document.getElementById('uptoup');
  const btnUA = document.getElementById('ua');
  const btnPL = document.getElementById('pl');
  if (switcher === 0) {
    btnPL.style.display = 'none';
    btnUA.style.display = 'none';
    btnUP.style.display = 'none';
    switcher = 1;
  } else {
    btnPL.style.display = 'block';
    btnUA.style.display = 'block';
    btnUP.style.display = 'block';
    switcher = 0;
  }
};

//######                                                                                        SCROLL FUNCTION
const scrollUP = () => {
  const header = document.querySelector('header');
  header.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start',
  });
};
