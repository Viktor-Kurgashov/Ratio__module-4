const prefix = {
  value: '',

  add: function(url) {
    url = new URL(url);
    url.pathname = this.value + url.pathname;
    return url.toString();
  },

  skip: function(route) {
    return route.startsWith(this.value) ? route.replace(this.value, '') : null;
  },
};


export default prefix;