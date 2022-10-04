import asyncPage from './page/asyncPage';
import Header from '../components/header';
import Featured from '../components/featured';
import Catalog from '../components/catalog';
import Article from '../components/article';
import About from '../components/about';
import Page404 from '../components/page404';

const routes = [
  {
    match: p => p === '/',
    render: () => asyncPage(
      Header,
      Featured,
      () => Catalog({ limit: 3 }),
      () => Featured({ right: true })
    ),
    title: 'Home',
  },
  {
    match: p => p === '/blog',
    render: () => asyncPage(
      Header,
      Featured,
      () => Catalog({ limit: 10 })
    ),
    title: 'Blog',
  },
  {
    // роут /artilce/:id
    match: p => /\/article\/\d+$/.test(p),
    render: (pathname) => asyncPage(
      Header,
      () => Article(pathname),
    ),
  },
  {
    match: p => p === '/about',
    render: () => asyncPage(Header, About),
    title: 'About',
  },
  {
    match: () => true,
    render: () => asyncPage(Page404),
    title: 'Page Not Found',
  },
];

export default routes;