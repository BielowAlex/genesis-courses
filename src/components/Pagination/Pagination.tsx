import React from 'react';
import ReactPaginate from 'react-paginate';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { coursesActions } from '../../redux/slices';

import './Pagination.scss';

interface IPagEvent {
  selected:number
}

const Pagination:React.FC = () => {
  const { courseList } = useAppSelector((state) => state.coursesReducer);
  const dispatch = useAppDispatch();

  const itemsPerPage = 10;

  const [itemOffset, setItemOffset] = React.useState<number>(0);
  const [pageCount, setPageCount] = React.useState<number>(0);

  React.useEffect(() => {
    setPageCount(Math.ceil(courseList.length / itemsPerPage));

    const endOffset = itemOffset + itemsPerPage;
    dispatch(coursesActions.updatePaginationCourseList({
      start: itemOffset,
      end: endOffset,
    }));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [courseList.length, dispatch, itemOffset]);

  const handlePageClick = (event:IPagEvent) => {
    const newOffset = (event.selected * itemsPerPage) % courseList.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={(e) => handlePageClick(e)}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="Prev"
      containerClassName="pagination"
    />
  );
};

export default Pagination;
