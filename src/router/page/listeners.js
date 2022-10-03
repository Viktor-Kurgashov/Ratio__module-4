const listeners = {
  actions: [],

  run: function () {
    this.actions.forEach(item => item());
    this.actions = [];
  },

  add: function (func) {
    if (func) this.actions.push(func);
  },

  reset: function() {
    this.actions = [];
  },
};

export default listeners;