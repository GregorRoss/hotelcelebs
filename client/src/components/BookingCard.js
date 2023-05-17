import { deleteBooking } from "../containers/BookingService";

const BookingCard = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }


    return ( 
        <>
        <h1>{booking.name}</h1>
        <p>Email: {booking.email}</p>
        <p>Checked in?: {booking.checked_in}</p>
        <button onClick={handleDelete}> 🗑 </button>
        <hr></hr>
    </>

     );
}
 
export default BookingCard;