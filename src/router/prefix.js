// добавление publicPath ко всем ссылкам при создании страницы

const prefix = {
  // копия publicPath, без / в конце
  value: '',

  // принимает location.href, добавляет префикс к ссылке
  add: function(url) {
    url = new URL(url);
    url.pathname = this.value + url.pathname;
    return url.toString();
  },

  // принимает location.pathname, возвращает ссылку без префикса
  skip: function(route) {
    return route.startsWith(this.value) ? route.replace(this.value, '') : null;
  },
};

export default prefix;