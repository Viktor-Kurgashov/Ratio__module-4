const loadData = (url, script = j => j) =>
  fetch('https://course.7t33n.ru/rest/v1' + url)
    .then(res => {
      if (res.ok) return res.json();
      else throw new Error(res?.statusText);
    })
    .then(json => script(json))
    .catch(() => null);

export default loadData;