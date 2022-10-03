import router from './router';
import prefix from './prefix';

window.addEventListener('load', () => {
  const l = window.location;
  if (prefix.value && l.pathname === '/') l.replace(prefix.add(l.href));
  else router(l.pathname);
})

window.addEventListener('popstate', (event) => {
  router(event.target.location.pathname);
})