import router from './router';
import prefix from './prefix';

// запуск роутера
window.addEventListener('load', () => {
  const l = window.location;
  // перенаправляет если войти на '/' вместо '/-prefix-/'
  if (prefix.value && l.pathname === '/') l.replace(prefix.add(l.href));
  else router(l.pathname);
})

// кнопки вперёд / назад
window.addEventListener('popstate', (event) => {
  router(event.target.location.pathname);
})