import loadData from '../../utils/loadData'
import Preview from '../preview';
import './style.scss';

const Catalog = async (props = { limit: 1 }) => {
  const data = await loadData(
    'https://course.7t33n.ru/rest/v1/blog/articles',
    json => json
      .slice(0, props.limit)
      .map(item => ({
        ...item,
        description: item.description.replace(/\<\/?p\>/g, ''),
      }))
  );

  if (!data) return null;

  const items = data.reduce((total, item) => total + `
    <li class="catalog-item">
      <a class="catalog-item__image-link" href="/article/${item.id}">
        <img src="https://random.imagecdn.app/1200/800" alt="article image">
      </a>
      ${Preview(item).markup}
    </li>
  `, '')

  return {
    markup: `
      <div class="catalog">
        <h1 class="catalog__header">Editor's picks</h1>
        <div class="catalog__separator"></div>
        <ul class="catalog__list">${items}</ul>
      </div>
    `,
  }
};

export default Catalog;