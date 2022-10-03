import loadData from '../../utils/loadData'
import './style.scss';

const About = async () => {
  const data = await loadData(
    'https://course.7t33n.ru/rest/v1/about',
    json => ({
      ...json,
      content: json.content
        .replace(/<img.+\/>/, '<br />\n<br />\n')
        .split('<br />\n<br />\n')
        .map(item => item.replace(/<\/?p>/g, ''))
    })
  );

  if (!data) return null;
  // console.warn(data.content);

  return {
    markup: `
      <section class="about">
        <h1 class="about__header">${data.title}</h1>
        <img class="about__image" src="https://random.imagecdn.app/1200/800" alt="about image">
        ${data.content.reduce((sum, item) => sum + `<p>${item}</p>`, '')}
      </section>
    `,
  }
};

export default About;