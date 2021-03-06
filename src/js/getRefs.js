export default function getRefs() {
  return {
    form: document.querySelector('#search-form'),
    input: document.querySelector('#search-form input'),
    btnSubmit: document.querySelector('#search-form button'),
    watchedBtn: document.querySelector('#header-btn-watched'),
    queueBtn: document.querySelector('#header-btn-queue'),
    homeLink: document.querySelector('#home'),
    myLibraryLink: document.querySelector('#my-library'),
    buttonsBlock: document.querySelector('.header__block-btn'),
    filmsContainer: document.querySelector('.films-collection'),
    header: document.querySelector('.header'),
    main: document.querySelector('main'),
    footer:  document.querySelector('footer'),
    logo: document.querySelector('#logo'),
    loaderBlock: document.querySelector('.load'),
    loader: document.querySelector('.loader'),

    btnClose: document.querySelector('[data-button_close]'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
    cardEl: document.querySelector('.card'),
    addToWatchedBtn: document.querySelector('[data-watched]'),
    addToQueueBtn: document.querySelector('[data-queue]'),
    ulEl: document.querySelector('.films-collection'),
    team: document.querySelector(`.team-modal`),
    backdropTeam: document.querySelector(`.backdrop-team`),
    btnModalTeamClose: document.querySelector(`.modal-team_close`),
    ulTeamEl: document.querySelector('.team-collection'),
    upButton: document.querySelector('[data-upButton]'),
    sentinel: document.querySelector('#sentinel'), // scroll
  };
}
