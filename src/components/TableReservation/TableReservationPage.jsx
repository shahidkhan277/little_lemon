import "./TableReservation.css";
import TableReservationForm from './TableReservationForm'

const TableReservationPage = () => {
  return (
    <div className="reservationWrapper">
      <div className="reservationContainer">
        <div className="textSection">
          <h2>Welcome To Little Lemon Restaurant</h2>
          <p>Please Fill the Form to Reserve your Table at Little Lemon Restaurant. Where You will Enjoy Some Delicous Food.</p>
          <p>You can also Celebrate Birthday , Annivarsary or Engagement Party with us.</p>
        </div>
        <div className="formSection">
          <TableReservationForm/>
        </div>
      </div>
    </div>
  )
}

export default TableReservationPage
