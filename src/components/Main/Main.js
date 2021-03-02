import React, {useState, useEffect} from 'react'
import './_main.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from './Card'
import uniqid from 'uniqid'

function Main(){

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState('')
    const [numDays, setNumDays] = useState(7)
    const [duration, setDuration] = useState([...Array(numDays).keys()])
    

     // returns the end date given the starting date and the number of days 
    function getNewDate(date, days) {
        let hours = days * 24
        let dateStart = new Date(date)
        let dateEnd = (dateStart.getTime() + (hours * 60 * 60 * 1000))
        dateEnd = new Date(dateEnd)
        return dateEnd
     }

     function getDateString(date){
        let newDate = new Date(date)
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec']
        return `${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`
     }

     function getDateDiff(start, end){
         let s = new Date(start).getTime()
         let e = new Date(end).getTime()

         let diff = Math.floor((e - s) / 1000 / 60 / 60 / 24)
         return diff
     }


     function handleChange(date, type){
         let diff;
        if (type === 'startDate'){
            setStartDate(date)
            diff = getDateDiff(date, endDate) + 2
            setNumDays(diff)
            setDuration([...Array(diff).keys()])
        } else {
            setEndDate(date)
            diff = getDateDiff(startDate, date) + 2
            setNumDays(diff)
            setDuration([...Array(diff).keys()])
        }
        console.log(duration)
     }

    useEffect(() => {

        const getEndDate = () => {
            if (endDate === ''){
                setEndDate(new Date(getNewDate(startDate, 6)))
            }
        }

        const decrementDate = (e) => {
            let el = e.target.classList

            if (el.contains('startDate') ){
                setStartDate(new Date(getNewDate(startDate, -1)))
                setNumDays(prevState => prevState + 1)
                setDuration([...Array(numDays + 1).keys()])
               
            } else if (el.contains('endDate')){
                setEndDate(new Date(getNewDate(endDate, -1)))
                setNumDays(prevState => prevState - 1)
                setDuration([...Array(numDays - 1).keys()])
            }
           
            
        }

        const incrementDate = (e) => {
            let el = e.target.classList

            if (el.contains('startDate') ){
                setStartDate(new Date(getNewDate(startDate, 1)))
                setNumDays(prevState => prevState - 1)
                setDuration([...Array(numDays - 1).keys()])
            } else if (el.contains('endDate')){
                setEndDate(new Date(getNewDate(endDate, 1)))
                setNumDays(prevState => prevState + 1)
                setDuration([...Array(numDays + 1).keys()])
            }
           
        }

        window.addEventListener('load', getEndDate)



        let minus = document.querySelectorAll('.decrement')
            minus.forEach(el => {
                el.addEventListener('click', decrementDate)
            })
        
        let add = document.querySelectorAll('.increment')
            add.forEach(el => {
                el.addEventListener('click', incrementDate)
            })
       

        return () => {
            window.removeEventListener('load', getEndDate)

            minus.forEach(el => {
                el.removeEventListener('click', decrementDate)
            })

            add.forEach(el => {
                el.removeEventListener('click', incrementDate)
            })
            
        }

    }, [startDate,endDate, numDays, duration])


    return (
        <main className="container">
            <div className="date">
                <div className="date__picker">
                    <span className="startDate decrement"></span>
                    <DatePicker className="startDate" selected={startDate} onChange={(date) => handleChange(date, 'startDate')}  dateFormat={'MMM dd, yyyy'}/>
                    <span className="startDate increment"></span>
                </div>
                <div className="date__picker">
                    <span className="endDate decrement"></span>
                    <DatePicker className="endDate" selected={endDate} onChange={(date) => handleChange(date, 'endDate')}  dateFormat={'MMM dd, yyyy'}/>
                    <span className="endDate increment"></span>
                </div>
            </div>
            <div className="planner">
                {duration.map(num => {
                    return <Card key={uniqid()} startDate={getDateString(getNewDate(startDate, num ))} />
                })}
               
            </div>
            
        </main>
    )
}

export default Main