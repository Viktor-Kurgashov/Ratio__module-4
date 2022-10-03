import getDateString from '../../utils/getDateString';
import './style.scss';

const Preview = (data) => ({
  markup: `
    <div class="preview">
      <p class="preview__tag">${data.tag}</p>

      <a class="preview__header-link" href="/article/${data.id}">
        <h2 class="preview__header">${data.title}</h2>
      </a>

      <p class="preview__author">${data.author}</p>

      <div class="preview__marker"></div>

      <p class="preview__created-at">${getDateString(data.createdAt * 1000)}</p>

      <p class="preview__read-time">(${Math.round(data.readTime / 60)} mins read)</p>

      <p class="preview__text">${data.description}</p>
    </div>
  `,  
});

export default Preview;