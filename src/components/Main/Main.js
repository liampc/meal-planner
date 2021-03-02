import React, {useState, useEffect} from 'react'
import './_main.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from './Card'
import uniqid from 'uniqid'

function Main(){

    const [startDate, setStartDate] = useState(new Date())
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

    useEffect(() => {


        const decrementDate = (e) => {
            let el = e.target.classList

            if (el.contains('startDate') ){
                setStartDate(new Date(getNewDate(startDate, -1)))
               
            }
           
        }

        const incrementDate = (e) => {
            let el = e.target.classList

            if (el.contains('startDate') ){
                setStartDate(new Date(getNewDate(startDate, 1)))
            }
           
        }

      

        let minus = document.querySelectorAll('.decrement')
            minus.forEach(el => {
                el.addEventListener('click', decrementDate)
            })
        
        let add = document.querySelectorAll('.increment')
            add.forEach(el => {
                el.addEventListener('click', incrementDate)
            })
       

        return () => {
           

            minus.forEach(el => {
                el.removeEventListener('click', decrementDate)
            })

            add.forEach(el => {
                el.removeEventListener('click', incrementDate)
            })
            
        }

    }, [startDate, numDays, duration])


    return (
        <main className="container">
            <div className="date">
                <div className="date__picker">
                    <span className="startDate decrement"></span>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}  dateFormat={'MMM dd, yyyy'}/>
                    <span className="startDate increment"></span>
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