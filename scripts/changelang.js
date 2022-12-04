let language = 'pl';
const headerOne = document.getElementsByTagName('h1');
const phrase = document.getElementsByTagName('p');

const changeLang = (lang) => {
  localStorage.setItem('language', lang);
  console.log(localStorage.getItem('language'));
  renderPage(localStorage.getItem('language'), localStorage.getItem('page'));
};

const renderPage = (lang, page) => {
  if (lang === 'pl') {
    if (page === 'main') {
      headerOne[0].innerText = 'Głowna';
      phrase[0].innerText = 'Pazury';
    } else if (page === 'what-is-gel') {
      headerOne[0].innerText = 'Co to jest gel';
      phrase[0].innerText = 'Gel - ...';
    } else if (page === 'what-is-pudra') {
      headerOne[0].innerText = 'Co to jest pudra';
      phrase[0].innerText = 'Pudra - ...';
    } else {
      console.log('page doesn`t exist');
    }
  } else if (lang === 'ua') {
    if (page === 'main') {
      headerOne[0].innerText = 'Головна';
      phrase[0].innerText = 'Нігтики';
    } else if (page === 'what-is-gel') {
      headerOne[0].innerText = 'Що таке гель';
      phrase[0].innerText = 'Пудра - ...';
    } else if (page === 'what-is-pudra') {
      headerOne[0].innerText = 'Що таке пудра';
      phrase[0].innerText = 'Гель - ...';
    } else {
      console.log('page doesn`t exist');
    }
  } else {
  }
};

const start = (page) => {
  localStorage.setItem('page', page);
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'pl');
    renderPage(localStorage.getItem('language'), localStorage.getItem('page'));
  } else {
    renderPage(localStorage.getItem('language'), localStorage.getItem('page'));
  }
};
