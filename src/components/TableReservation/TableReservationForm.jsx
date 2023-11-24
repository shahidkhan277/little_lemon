import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Form.css";
import * as Yup from "yup";
import { toast } from "react-toastify";


const detailSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().required("Email is required").email("Email is not valid!"),
  contactNumber: Yup.number().required("Contact Number is  required"),
  guests: Yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
  date: Yup.string().required("Please select date and time!"),
});

const TableReservationForm = () => {

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', contactNumber: '', guests: '', date: '' }}
        validationSchema={detailSchemaValidation}
        onSubmit={(values , {resetForm}) => {
          toast.success("Thank You for Reserving Table at Little Lemon Restaurant.");
          resetForm({values: ''})
        }}
        >
        <Form className="form">
          <fieldset>
            <div className="field">
              <label htmlFor="name">Enter Full Name</label>
              <Field type="text" placeholder="Enter Your Name Here..." name="name" />
              <p className="error"><ErrorMessage  name="name" /></p>
            </div>
            <div className="field">
              <label htmlFor="email">Enter Email</label>
              <Field type="text" placeholder="text@gmail.com" name="email" />
              <p className="error"><ErrorMessage  name="email" /></p>
            </div>
            <div className="field">
              <label htmlFor="telephone">Enter Contact Number</label>
              <Field type="text" placeholder="233 00 000 0000" name="contactNumber" />
              <p className="error"><ErrorMessage  name="contactNumber" /></p>
            </div>
            <div className="field occasion">
              <label htmlFor="occasion">Occasion (optional)</label>
              <div className="options">
                <select name="occasion">
                  <option value="select">Select occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
            </div>
            <div className="field guest">
                    <label htmlFor="guests">Number of Guests</label>
                    <Field type="number" placeholder="Select Number of Guests" name="guests" />
                    <p className="error"><ErrorMessage  name="guests" /></p>
            </div>
            <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <Field type="datetime-local" name="date"/>
                    <p className="error"> <ErrorMessage  name="date" /></p>
                </div>
                <button className="reserve-btn" type="submit">Reserve Table</button>
          </fieldset>
        </Form>
      </Formik>
    </div>
  )
}

export default TableReservationForm
