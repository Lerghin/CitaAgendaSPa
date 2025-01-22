import React, { useEffect, useState } from 'react';
import './Home.css'; 
import image1 from '../../public/imagen1.png'; 
import { CgHello } from "react-icons/cg";


const Home = () => {
  
  
  const [selectedService, setSelectedService] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const name = appointments.length > 0 ? appointments[0].name : '';


  const filteredServices = appointments.filter(app => {
    return selectedService === '' || app.service === selectedService;
  });

  return (
    <>
      <div className="greeting-container">
        <h1>Bienvenido/a {name} <CgHello /></h1>
        <img src={image1} alt="User" className='image-greetings' />
      </div>
      <h2>Tus Citas</h2>
      <div className='filters-container'>
    
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          <option value=''>Todos los Servicios</option>
          <option value='Corte de Cabello'>Corte de Cabello</option>
          <option value='Pedicure'>Pedicure</option>
          <option value='Manicure'>Manicure</option>
          <option value='Masaje'>Masaje</option>
          <option value='Depilación'>Depilación</option>
          <option value='Tratamiento Facial'>Tratamiento Facial</option>
        </select>
      </div>
      <div className='appointments-container'>
        
        <div className='cards-container'>
          {filteredServices.map((ser, index) => (
            <div key={index} className="appointment-card">
              <h3>{ser.service}</h3>
              <p><strong>Fecha:</strong> {ser.date}</p>
              <p><strong>Hora:</strong> {ser.time}</p>
              

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
