const listeners = {
  actions: [],

  run: function() {
    this.actions.forEach(func => func());
    this.actions = [];
  },

  add: function(func) {
    this.actions.push(func);
  },

  reset: function() {
    this.actions = [];
  },
};

export default listeners;