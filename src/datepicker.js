import React, { useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat='yyyy-MM-dd'
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

export default DatePicker2

  //earlies data is 1995-06-16
