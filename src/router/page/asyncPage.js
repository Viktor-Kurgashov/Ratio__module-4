import handleLink from './handleLink';
import listeners from './listeners';
import cleanup from './cleanup';
import Loader from '../loader';
import Error from '../error';

// рендерит страницу из полученных компонентов
const asyncPage = async (...sections) => {
  // вызывает функции очистки прошлой страницы
  cleanup.run();
  // показывает лоадер-модалку
  const loader = Loader();

  for (let child of sections) {
    // при ошибке из компонента возвращается null
    child = await child();

    if (child) {
      document.body.insertAdjacentHTML('beforeend', child.markup);
      // прослушка событий, добавление картинок, всё что должно выполняться после рендера
      if (child?.listeners) listeners.add(child.listeners);
      // снятие прослушки событий и всё что выполняется после удаления компонента
      if (child?.clear) cleanup.add(child.clear);
    }
    else {
      // модальная плашка ошибки
      Error();
      // тут listeners ещё не выполнялись, очищает их
      listeners.reset();
      break;
    }
  }

  // добавляет publicPath и функции роутера на все ссылки
  handleLink();
  // навешивает накопившиеся прослушки событий, вставляет картинки итд
  listeners.run();
  loader.remove();
};

export default asyncPage;