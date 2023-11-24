import { Routes , Route } from "react-router-dom"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import TableReservationPage from "./components/TableReservation/TableReservationPage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
     <Header/>
     <Routes>
     <Route path="/" element={<Main/>} />
      <Route path="/ReserveTable" element={<TableReservationPage/>} />
     </Routes>
     <ToastContainer />
     <Footer/>
    </>
  )
}

export default App
