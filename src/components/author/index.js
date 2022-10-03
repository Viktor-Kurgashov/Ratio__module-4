import './style.scss';

const Author = (data) => ({
  markup: `
    <div class="author">
      <img class="author__avatar" alt="avatar">
      <h2 class="author__name">${data.author.name}</h2>
      <p class="author__nick">@${data.author.nick}</p>
      <p class="author__about">${data.author.about}</p>
    </div>
  `,
});

export default Author;