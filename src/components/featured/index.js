import loadData from '../../utils/loadData';
import Preview from '../preview';
import './style.scss';

const Featured = async (props = { right: false }) => {
  const data = await loadData(
    '/blog/featured',
    json => ({
      ...json,
      title: json.title.slice(17),
    })
  );

  if (!data) return null;

  return {
    markup: `
      <section class="featured${props.right ? ' featured--right' : ''}">
        <img class="featured__image" src=${data.image} alt='featured-image'>
        <div class="featured__article">${Preview(data).markup}</div>
      </section>
    `,
  }
};

export default Featured;