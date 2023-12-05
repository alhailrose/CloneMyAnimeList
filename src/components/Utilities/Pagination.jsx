import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleGoToFirstPage = () => {
    setPage(1);
    scrollTop();
  };

  const handleGoToLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  return (
    <div className='flex justify-center items-center py-4 px-2 md:gap-8 gap-4 text-color-primary md:text-2xl text-xl'>
      {page <= 1 ? null : (
        <>
          <button
            onClick={handleGoToFirstPage}
            className='transition-all hover:text-color-accent'
          >
            First
          </button>
          <button
            onClick={handlePrevPage}
            className='transition-all hover:text-color-accent'
          >
            Prev
          </button>
        </>
      )}

      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <>
          <button
            onClick={handleNextPage}
            className='transition-all hover:text-color-accent'
          >
            Next
          </button>
          <button
            onClick={handleGoToLastPage}
            className='transition-all hover:text-color-accent'
          >
            Last
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
