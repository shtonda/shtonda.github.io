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
  ui: {
    ua: {
      btnGel: 'Гель',
      btnPudra: 'Пудра',
      btnUp: 'До гори',
      btnMain: 'Головна',
    },
    pl: {
      btnGel: 'żel',
      btnPudra: 'prozsek',
      btnUp: 'do góry',
      btnMain: 'Główna',
    },
  },
  title: {
    ua: {
      main: 'Магічні нігті - Головна',
      gelPage: 'Магічні нігті - Про гель',
      pudraPage: 'Магічні нігті - Про пудру',
    },
    pl: {
      main: 'Magiczne paznokcie - Główna',
      gelPage: 'Magiczne paznokcie - O żelu',
      pudraPage: 'Magiczne paznokcie - O proszku',
    },
  },
};

//######                                                                                        RENDER_PAGE_FUCNTION

const renderPage = (lang, page) => {
  //content
  const headerOne = document.getElementsByTagName('h1');
  const phrase = document.getElementsByTagName('p');
  //ui
  const btnUP = document.querySelector('#uptoup');
  const btnGel = document.querySelector('#gel');
  const btnPudra = document.querySelector('#pudra');
  const btnMain = document.querySelector('#main');
  if (page === 'main') {
    headerOne[0].innerText = dataOfPages.mainPage[lang].header1;
    phrase[0].innerText = dataOfPages.mainPage[lang].intro;
    document.title = dataOfPages.title[lang].main;
  } else if (page === 'what-is-gel') {
    headerOne[0].innerText = dataOfPages.gelPage[lang].header1;
    phrase[0].innerText = dataOfPages.gelPage[lang].intro;
    document.title = dataOfPages.title[lang].gelPage;
  } else if (page === 'what-is-pudra') {
    headerOne[0].innerText = dataOfPages.pudraPage[lang].header1;
    phrase[0].innerText = dataOfPages.pudraPage[lang].intro;
    document.title = dataOfPages.title[lang].pudraPage;
  } else {
    console.log('page doesn`t exist');
  }
  btnUP.innerText = dataOfPages.ui[lang].btnUp;
  btnGel.innerText = dataOfPages.ui[lang].btnGel;
  btnPudra.innerText = dataOfPages.ui[lang].btnPudra;
  btnMain.innerText = dataOfPages.ui[lang].btnMain;
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
let switcherLeft = 0;
let switcherRight = 0;
const hideShowBtns = (side) => {
  const btnHideL = document.getElementById('hideLeft');
  const btnHideR = document.getElementById('hideRight');
  if (side === 'right') {
    const btnUP = document.getElementById('uptoup');
    const btnUA = document.getElementById('ua');
    const btnPL = document.getElementById('pl');
    if (switcherRight === 0) {
      btnPL.style.display = 'none';
      btnUA.style.display = 'none';
      btnUP.style.display = 'none';
      btnHideR.style.opacity = '0.2';
      switcherRight = 1;
      console.log('open right');
    } else {
      btnPL.style.display = 'block';
      btnUA.style.display = 'block';
      btnUP.style.display = 'block';
      btnHideR.style.opacity = '1';
      switcherRight = 0;
    }
  } else {
    const btnGel = document.getElementById('gel');
    const btnPudra = document.getElementById('pudra');
    const btnMain = document.getElementById('main');
    if (switcherLeft === 0) {
      btnPudra.style.display = 'none';
      btnGel.style.display = 'none';
      btnMain.style.display = 'none';
      btnHideL.style.opacity = '0.2';
      switcherLeft = 1;
    } else {
      btnGel.style.display = 'flex';
      btnPudra.style.display = 'flex';
      btnMain.style.display = 'flex';
      btnHideL.style.opacity = '1';
      switcherLeft = 0;
    }
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
