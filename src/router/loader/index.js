import './style.scss';

const Loader = () => ({
  markup: `
    <div class="loader">
      <div class="lds-spinner">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  `,

  remove: () => {
    document.querySelector('.loader').remove();
  },
});

export default Loader;