import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const CreatePaginationContainer = () => {
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
  console.log(meta);
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
          <button
            className={`join-item btn ${1 == page && 'btn-active'}`}
            onClick={() => paginateHandler(1)}>
            1
          </button>
          {page == 2 ? (
            <button
              className={`join-item btn btn-active`}
              onClick={() => paginateHandler(page)}>
              {page}
            </button>
          ) : (
            page !== 1 && <button className="join-item btn">...</button>
          )}
          {page > 2 && page < pageCount - 1 && (
            <button
              className="join-item btn btn-active"
              onClick={() => paginateHandler(page)}>
              {page}
            </button>
          )}
          {page == pageCount - 1 ? (
            <button
              className="join-item btn btn-active"
              onClick={() => paginateHandler(page)}>
              {page}
            </button>
          ) : (
            page !== pageCount && <button className="join-item btn">...</button>
          )}
          <button
            className={`join-item btn ${pageCount == page && 'btn-active'}`}
            onClick={() => paginateHandler(pageCount)}>
            {pageCount}
          </button>
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

export default CreatePaginationContainer;
