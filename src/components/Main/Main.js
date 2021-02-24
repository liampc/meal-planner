import React, {useState, useEffect} from 'react'
import './_main.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Main(){

    const [startDate, setStartDate] = useState(new Date())

    return (
        <main className="container">
            <DatePicker selected={startDate} onChange={date => setStartDate(date)}  dateFormat={'MMM dd, yyyy'}/>
        </main>
    )
}

export default Main