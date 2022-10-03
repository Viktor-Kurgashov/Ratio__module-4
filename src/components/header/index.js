import prefix from '../../router/prefix';
import logo from './assets/logo.png';
import './style.scss';

const Header = () => ({
  markup: `
    <header class="header">
      <div class="header__wrapper">
        <div class="header__body">
          ${prefix.skip(window.location.pathname) === '/'
          ? '<img class="header__logo" src="" alt="logo">'
          : '<a href="/"><img class="header__logo" src="" alt="logo"></a>'}        
          <button class="header__burger"></button>
          <nav class="header__nav">
            <a class="header__nav-link" href="/">Home</a>
            <a class="header__nav-link" href="/blog">Blog</a>
            <a class="header__nav-link" href="/about">About</a>
          </nav>
        </div>
      </div>
    </header>
  `,

  listeners: () => {
    document.getElementsByClassName('header__logo')[0].src = logo;

    for (let link of document.getElementsByClassName('header__nav-link')) {
      if (link.href === window.location.href) {
        link.classList.add('header__nav-link--current')
        break;
      }
    }
  },
});

export default Header;