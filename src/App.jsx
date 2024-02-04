import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';

const App = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nombre && formData.apellido && formData.dni && formData.email) {
      alert('Datos enviados');
    } else {
      alert('Completar todos los datos');
    }
  };

  return (
    <div className="container">
      <Titulo/>
      <form className="border border-top-0 px-5 py-3" onSubmit={handleSubmit}>
        <h5 className='py-4'>Llenar el formulario para crear una cita</h5>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Ingrese su nombre" name="nombre" onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Apellido</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Ingrese su apellido" name="apellido" onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">DNI</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Ingrese su DNI" name="dni" onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" placeholder="Ingrese su email" name="email" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 offset-sm-2 text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
