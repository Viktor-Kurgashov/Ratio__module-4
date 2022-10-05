import './style.scss';

const Loader = () => {
  document.body.style.overflowY = 'hidden';

  const elem = document.createElement('div');
  elem.classList.add('loader');

  elem.insertAdjacentHTML('beforeend', `
    <div class="lds-spinner">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>
  `);
  document.body.append(elem);

  return {
    elem,
    remove: function() {
      this.elem.remove();
      document.body.style.overflowY = '';
    },
  }
};

export default Loader;