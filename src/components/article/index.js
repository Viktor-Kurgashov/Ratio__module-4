import loadData from '../../utils/loadData';
import getDateString from '../../utils/getDateString';
import namedMeta from '../../utils/namedMeta';
import Author from '../author';
import Pagination from '../pagination';
import avatar from './assets/avatar.jpg';
import './style.scss';



const Article = async (pathname) => {
  const titles = await loadData('/blog/articles');

  if (!titles) return null;

  const id = pathname.match(/article\/(\d+)$/)?.[1];

  let article = await loadData('/blog/article/' + id, data => ({
    ...data,
    nextTitle: titles.find(item => item.id === data.nextId)?.title,
    prevTitle: titles.find(item => item.id === data.prevId)?.title,
    createdAt: getDateString(data.createdAt * 1000),
    readTime: Math.round(data.readTime / 60),
  }));

  if (!article) return null;



  return {
    markup: `
      <section class="article">
        <img class="article__image" src="https://random.imagecdn.app/1200/800" alt="article image">
        <h1 class="article__header">${article.title}</h1>
        <div class="article__info">
          <p>${article.author.name}</p>
          <div class="article__marker"></div>
          <p>${article.createdAt} (${article.readTime} mins read)</p>
          <p>#technology #tech #career</p>
        </div>
        <div class="article__text">${article.description}</div>
        ${Author(article).markup}
        ${Pagination(article).markup}
      </section>
    `,



    listeners: () => {
      document.title = article.title;
      document.querySelector('.author__avatar').src = avatar;
      namedMeta.add('keywords', article.seo.keywords);
      namedMeta.add('description', article.seo.description);
    },

    clear: () => {
      namedMeta.remove('keywords');
      namedMeta.remove('description');
    },
  }
};

export default Article;