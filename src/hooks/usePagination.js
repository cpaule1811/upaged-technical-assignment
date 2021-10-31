import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// reusable pagination hook
export default function usePagination(getPageData) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  //will dispatch redux action when page changes
  useEffect(() => {
    dispatch(getPageData(page));
  }, [page, dispatch, getPageData]);

  function next() {
    setPage(page + 1);
  }

  function prev() {
    setPage(page - 1);
  }

  function prevAvailable() {
    if (page <= 1) {
      return false;
    }
    return true;
  }

  function nextAvailable() {
    if (page > 4) {
      return false;
    }
    return true;
  }
  return { next, prev, prevAvailable, nextAvailable, page };
}
