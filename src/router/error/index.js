import './style.scss';

const Error = () => ({
  markup: `
    <div class="error">
      <b class="error__title">Что-то пошло не так</b>
      <p class="error__caption">Проверьте консоль</p>
      <button class="error__refresh-btn">Обновить страницу</button>
    </div>
  `,

  listeners: () => {
    document
      .querySelector('.error__refresh-btn')
      .addEventListener('click', () => {
        window.history.go();
      })
  },

  remove: () => {
    document.querySelector('.error').remove();
  },
});

export default Error;