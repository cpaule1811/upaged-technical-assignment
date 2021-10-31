import React from "react";
import { useSelector } from "react-redux";
import usePagination from "../hooks/usePagination";
import { fetchUpcomingShifts } from "../reducers/upcomingShiftsSlice";
import left from "../icons/left.svg";
import right from "../icons/right.svg";
import "../styles/DatePagination.scss";

function DatePagination() {
  const { next, prev, prevAvailable, nextAvailable } = usePagination(fetchUpcomingShifts);
  const { dateRange } = useSelector((state) => state.upcomingShiftsReducer);
  return (
    <div className="date-pagination-wrapper">
      {prevAvailable() && (
        <div>
          <img onClick={() => prev()} src={left} alt="left" />
        </div>
      )}
      <span>{dateRange}</span>
      {nextAvailable() && (
        <div>
          <img onClick={() => next()} src={right} alt="left" />
        </div>
      )}
    </div>
  );
}

export default DatePagination;
