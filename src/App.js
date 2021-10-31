import Navbar from "./components/Navbar";
import ShiftCard from "./components/ShiftCard"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShiftsInvited } from "./reducers/shiftsInvitedSlice";
import { fetchUpcomingShifts } from "./reducers/upcomingShiftsSlice";
import "./styles/App.css";

function App() {
  const dispatch = useDispatch();
  const { shiftsInvitedReducer, upcomingShiftsReducer } = useSelector(
    (state) => state
  );
  const { upcomingShifts } = upcomingShiftsReducer;
  const { shiftsInvited } = shiftsInvitedReducer;
  useEffect(() => {
    dispatch(fetchShiftsInvited());
    dispatch(fetchUpcomingShifts(1));
  }, [dispatch]);

  return (
    <div className="background">
      <Navbar />
      <div className="heading">
        <h2>Shifts</h2>
        <div>You've been invited</div>
      </div>
      <div className="shift-card-list">
      {shiftsInvited.map((shift, i) => (
        <ShiftCard key={i} {...shift} invited/>
      ))}
    </div>
    <div className="shift-card-list">
      {upcomingShifts.map((shift, i) => (
        <ShiftCard key={i} {...shift} index={i}/>
      ))}
    </div>
    </div>
  );
}

export default App;
