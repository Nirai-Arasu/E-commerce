import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { range } from '../util';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const { pageCount, page } = meta.pagination;
  const paginateHandler = (pageNumber) => {
    const params = new URLSearchParams(search);
    params.set('page', pageNumber);
    const newUrl = `${pathname}?${params}`;
    navigate(newUrl);
  };
  if (pageCount > 1) {
    return (
      <div className="w-full mt-16 flex justify-center md:justify-end">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => {
              if (page <= 1) {
                paginateHandler(pageCount);
              } else {
                paginateHandler(page - 1);
              }
            }}>
            PREV
          </button>
          {range(1, pageCount + 1).map((p) => (
            <button
              key={p}
              className={`join-item btn ${page === p ? 'btn-active' : ''}`}
              onClick={() => paginateHandler(p)}>
              {p}
            </button>
          ))}
          <button
            className="join-item btn"
            onClick={() => {
              if (page >= pageCount) {
                paginateHandler(1);
              } else {
                paginateHandler(page + 1);
              }
            }}>
            NEXT
          </button>
        </div>
      </div>
    );
  }
};
export default PaginationContainer;
