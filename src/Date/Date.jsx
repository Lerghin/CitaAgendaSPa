import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Date.css"; // Archivo CSS para estilos
import { useNavigate } from "react-router-dom";

const Date = () => {
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    service: "",
    username: "",
    lastName: "",
    name: "",
    email: "",
  });

  const services = [
    { name: "Corte de Cabello", price: 15 },
    { name: "Pedicure", price: 20 },
    { name: "Manicure", price: 15 },
    { name: "Masaje", price: 35 },
    { name: 'Depilación', price: 35 },
    { name: 'Tratamiento Facial', price: 50 },
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones de formulario
    if (!appointment.name || !appointment.email || !appointment.service || !appointment.time || !appointment.date) {
      toast.error("Por favor complete todos los campos requeridos.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(appointment.email)) {
      toast.error("Por favor ingrese un correo electrónico válido.");
      return;
    }
    if (appointment.name.length < 2) {
      toast.error("El nombre debe tener al menos 2 caracteres.");
      return;
    }
    if (appointment.lastName.length < 2) {
      toast.error("El apellido debe tener al menos 2 caracteres.");
      return;
    }
    if (appointment.username.length < 4) {
      toast.error("El nombre de usuario debe tener al menos 4 caracteres.");
      return;
    }

    // Guardar citas en localStorage
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    toast.success("Cita agendada correctamente.");

    // Resetear el formulario
    setAppointment({
      date: "",
      time: "",
      service: "",
      name: "",
      lastName: "",
      username: "",
      email: ""
    });
    navigate('/');
  };
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="appointment-form">
        <h3 className="title-date">Agendar Cita</h3>
        <div className="tooltip">
          <span className="info-span">Recuerda que puedes agendar las citas de tus hij@s, familiares y amig@s</span>
       
        </div>
        <div className="form-group">
          <label>Fecha:</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hora:</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Servicio:</label>
          <select
            name="service"
            value={appointment.service}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un servicio</option>
            {services.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name} - ${service.price}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={appointment.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={appointment.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={appointment.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={appointment.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Agendar</button>
      </form>
    </div>
  );
};

export default Date;
