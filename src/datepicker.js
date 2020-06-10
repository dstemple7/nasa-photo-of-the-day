import React, { useState} from "react";
import DatePicker from "react-datepicker";

function DatePicker2 () {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    );
  };

export default DatePicker2