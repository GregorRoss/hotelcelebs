import {useState} from 'react';
import { postBooking } from '../containers/BookingService';

const AddBooking = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked_in: "",
    })

    const [hasErrors, setHasErrors] = useState(false)

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData); 
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const valid = () => {
        return formData.name && formData.email
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if (valid()) {
            addBooking(formData)
            // Reset the form input Values
            setFormData({
                name: "",
                email: "",
                checked_in: "",  
            });
            setHasErrors(false)
        } else {
            setHasErrors(true)
        } 
    }
    
    return (
        <form onSubmit={onSubmit} id="bookings-form" >
        <h2>Add a Booking</h2>
        {hasErrors && (
            <div>Please fill in all fields!</div>
        )}
        <div className="formWrap">
            <label htmlFor="name">Name:</label>
            <input 
                onChange={onChange} 
                type="text" 
                id="name" 
                name="name"
                value={formData.name} />
        </div>
        <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={onChange} 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email} />
            </div>
            <div className="formWrap">
                <label htmlFor="checked_in">Checked In:</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="checked_in" 
                    name="checked_in" 
                    value={formData.checked_in}/>
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>
     );
}
 
export default AddBooking;