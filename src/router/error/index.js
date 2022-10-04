import './style.scss';

const Error = () => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="error">
      <b class="error__title">Что-то пошло не так</b>
      <p class="error__text">Проверьте консоль</p>
      <a class="error__link" href="/">Вернуться на главную</a>
    </div>
  `);
};

export default Error;