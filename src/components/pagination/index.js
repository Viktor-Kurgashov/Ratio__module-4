import './style.scss';

const Pagination = (data) => ({
  markup: `
    <div class="pagination">
      ${data?.prevId !== null ? `
        <a class="pagination__prev-link" href="/article/${data.prevId}"></a>
        <p class="pagination__prev-label">Go back: <b>${data?.prevTitle}</b></p>
      ` : ''}
      ${data?.nextId !== null ? `
        <p class="pagination__next-label">Next up: <b>${data?.nextTitle}</b></p>
        <a class="pagination__next-link" href="/article/${data.nextId}"></a>
      ` : ''}
    </div>
  `,
});

export default Pagination;