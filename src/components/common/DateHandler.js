import React, { useState, useEffect, useRef } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import styled from "styled-components";
import { CalendarToday } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { getDateTimeFrame,getDateTimeInterval } from "../../slices/dateSlices";


const DateHandler = ({ styleClass, setValue, name }) => {

  const dispatch = useDispatch();

  const handleSelect = (date) => {
    console.log(date); // native Date object
  };

  const refOne = useRef(null);
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  useEffect(() => {
    if (setValue) {
      setValue((prevData) => ({
        ...prevData,
        [name]: state,
      }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  let timeFrame = [];
  let timeInterval = [];

  const onDateRangeChange = (item) => {
    console.log("Aaaaa",item);
    if(name === "timeFrame"){
      timeFrame.push(item);
      dispatch(getDateTimeFrame(timeFrame))
    }
    if(name === "timeInterval"){
      timeInterval.push(item);
      dispatch(getDateTimeInterval(timeInterval))
    }

    setState([item.selection]);
    if (setValue) {
      setValue((prevData) => ({
        ...prevData,
        [name]: [item.selection],
      }));
    }
  };


  return (
    <>
      <DateHandlerStyled>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Tooltip title="Apply filter according to date" arrow>
            <Box
              onClick={() => setOpen((open) => !open)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              className="primary_color date_picker"
            >
              <CalendarToday sx={{ opacity: "0.7" }} />
              <Box className="inputBox text" sx={{ opacity: "0.7" }}>
                {`${format(state[0].startDate, "MMM, dd yyyy")} - ${format(
                  state[0].endDate,
                  "MMM, dd yyyy"
                )}`}
              </Box>
            </Box>
          </Tooltip>

          {open && (
            <Box
              ref={refOne}
              className={`${styleClass}`}
              sx={{
                mt: 1,
                position: "absolute",
                right: "5px",
                top: "3.3rem",
                zIndex: "999",
              }}
            >
              <DateRange
                //   onChange={handleSelect}
                onChange={(item) => onDateRangeChange(item)}
                moveRangeOnFirstSelection={false}
                ranges={state}
                editableDateInputs={false}
                months={1}
                direction="horizontal"
              />
            </Box>
          )}
        </Box>
      </DateHandlerStyled>
    </>
  );
};

export default DateHandler;

const DateHandlerStyled = styled.section`
  @media (max-width: 563px) {
    .date_range_dashbaord {
      right: -5rem !important;
    }
  }
  .date_picker {
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0px 2px 3px #686868;
    svg {
      max-width: 20px;
      margin-right: 10px;
    }
  }
`;
