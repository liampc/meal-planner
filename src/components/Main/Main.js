import React, {useState, useEffect} from 'react'
import './_main.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Main(){

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return (
        <main className="container">
            <div className="date">
                <div className="date__picker">
                    <span></span>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}  dateFormat={'MMM dd, yyyy'}/>
                    <span></span>
                </div>
                <div className="date__picker">
                    <span></span>
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)}  dateFormat={'MMM dd, yyyy'}/>
                    <span></span>
                </div>
            </div>
          
            
        </main>
    )
}

export default Main