import routes from './routes';
import prefix from './prefix';

const router = (pathname) => {
  document.body.innerHTML = '';
  // убирает publicPath из роута
  pathname = prefix.skip(pathname);

  for (let route of routes) {
    if (route.match(pathname)) {
      route.render(pathname);
      if (route.title) document.title = route.title;
      break;
    }
  }
};

export default router;