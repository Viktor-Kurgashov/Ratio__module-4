const namedMeta = {
  add: (name, content) => {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  },

  remove: (name) => {
    document.querySelector(`meta[name="${name}"]`).remove();
  },
};

export default namedMeta;