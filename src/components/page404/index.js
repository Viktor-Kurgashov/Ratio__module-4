import './style.scss';

const Page404 = () => ({
  markup: `
    <div class="page404">
      <b class="page404__title">404</b>
      <p class="">Страница не найдена</p>
      <a class="page404__link" href="/">Вернуться на главную</a>
    </div>
  `,
});

export default Page404;