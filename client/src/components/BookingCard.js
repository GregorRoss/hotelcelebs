import { deleteBooking } from "../containers/BookingService";

const BookingCard = ({booking, removeBooking, handleEditClicked}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }

    const handleEdit = () => {
        handleEditClicked(booking)
    }


    return ( 
        <>
        <h1>{booking.name}</h1>
        <p>Email: {booking.email}</p>
        <p>Checked in?: {booking.checked_in}</p>
        <button onClick={handleDelete}> 🗑 </button>
        <button onClick={handleEdit}> Edit </button>
        <hr></hr>
    </>

     );
}
 
export default BookingCard;