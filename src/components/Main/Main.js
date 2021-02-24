import React, {useState, useEffect} from 'react'
import './_main.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Main(){

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState('')


     // returns the end date given the starting date and the number of days 
    function getNewDate(date, days) {
        let hours = days * 24
        let dateStart = new Date(date)
        let dateEnd = (dateStart.getTime() + (hours * 60 * 60 * 1000))
        dateEnd = new Date(dateEnd)
        return dateEnd
     }

    useEffect(() => {

        const getEndDate = () => {
            if (endDate === ''){
                setEndDate(new Date(getNewDate(startDate, 7)))
            }
        }

        const decrementDate = () => {
            setStartDate(new Date(getNewDate(startDate, -1)))
        }

        const incrementDate = () => {
            setStartDate(new Date(getNewDate(startDate, 1)))
        }

        window.addEventListener('load', getEndDate)
        document.querySelector('#left-startDate').addEventListener('click', decrementDate)
        document.querySelector('#right-startDate').addEventListener('click', incrementDate)

        return () => {
            window.removeEventListener('load', getEndDate)
            document.querySelector('#left-startDate').removeEventListener('click', decrementDate)
            document.querySelector('#right-startDate').removeEventListener('click', incrementDate)
        }

    }, [startDate,endDate])


    return (
        <main className="container">
            <div className="date">
                <div className="date__picker">
                    <span id="left-startDate"></span>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}  dateFormat={'MMM dd, yyyy'}/>
                    <span id="right-startDate"></span>
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