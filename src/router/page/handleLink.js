import router from '../router';
import prefix from '../prefix';

const handleLink = () => {
  for (let link of document.body.getElementsByTagName('a')) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const pathname = new URL(event.currentTarget.href).pathname;
      window.history.pushState(null, '', pathname);
      router(pathname);
    })
    link.href = prefix.add(link.href);
  }
};

export default handleLink;