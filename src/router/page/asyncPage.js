import handleLink from './handleLink';
import listeners from './listeners';
import cleanup from './cleanup';
import Loader from '../loader';
import Error from '../error';

const asyncPage = async (...sections) => {
  cleanup.run();
  const loader = Loader();
  document.body.insertAdjacentHTML('beforeend', loader.markup);

  for (let child of sections) {
    child = await child();

    if (child) {
      document.body.insertAdjacentHTML('beforeend', child.markup);
      listeners.add(child?.listeners)
      cleanup.add(child?.clear);
    }
    else {
      const error = Error();
      document.body.insertAdjacentHTML('beforeend', error.markup)
      error?.listeners();
      listeners.reset();
      cleanup.run();
      break;
    }
  }

  handleLink();
  listeners.run();
  loader.remove();
};

export default asyncPage;