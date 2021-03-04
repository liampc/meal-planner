import React from 'react'
import DatePicker from "react-datepicker";


function Form(props){
    return (
        <form className="form container">
            <h2>Add Food</h2>
            <div className="form__inputs">
            <DatePicker className="form__date--white" selected={props.selectedDate} onChange={date => props.setSelectedDate(date)}  dateFormat={'MMM dd, yyyy'}/>
                <input className="form__input" type="text" placeholder="Food"/>
                <select className="form__select">
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="form__buttons">
                <button className="form__button">+</button>
                <button className="form__button">-</button>
            </div>
        </form>
    )
}

export default Form