import './style.scss';

const Loader = () => {
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
    },
  }
};

export default Loader;