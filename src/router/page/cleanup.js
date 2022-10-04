const cleanup = {
  actions: [],

  run: function() {
    this.actions.forEach(func => func());
    this.actions = [];
  },

  add: function(func) {
    this.actions.push(func);
  },
};

export default cleanup;