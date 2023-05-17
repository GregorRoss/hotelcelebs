import {useState} from 'react';

const EditBooking = ({bookingToEdit, handleBookingUpdate, handleEditClicked}) => {

    const [formData, setFormData] = useState({
        name: bookingToEdit.name,
        email: bookingToEdit.email,
        checked_in: "False",
    })

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        handleBookingUpdate(bookingToEdit._id, formData)
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            checked_in: "",
        });
        handleEditClicked(null)
    }

    return (
        <form onSubmit={onSubmit} className="bookings-edit-form" id="bookings-form" >
            <h2>Edit {bookingToEdit.name} Booking</h2>
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

    return ( 

        <h3>Edit Booking</h3>
     );
}
 
export default EditBooking;