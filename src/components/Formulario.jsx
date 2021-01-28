import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import uuid from "uuid/dist/v4";

const Formulario = ({crearCita}) => {

    //Crear state de citas.
    const [cita, updateCita] = useState({
        mascota: '', 
        propietario: '', 
        fecha: '', 
        hora: '', 
        sintomas: '',
        errors: {}
    })

    const handleChange = e => {
        updateCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const validate = values => {

        const errors = {}
        if(!values.mascota){
            errors.mascota = 'Este campo es obligatorio'
        }
        if(!values.propietario){
            errors.propietario = 'Este campo es obligatorio'
        }
        if(!values.fecha){
            errors.fecha = 'Este campo es obligatorio'
        }
        if(!values.hora){
            errors.hora = 'Este campo es obligatorio'
        }
        if(!values.sintomas){
            errors.sintomas = 'Este campo es obligatorio'
        }
        
        return errors
    }

    const handleSubmit = e => {
        e.preventDefault()

       const {errors, ...data} = cita
       const result = validate(data)       
       updateCita({
           ...cita,
           errors: result
        })

        if(Object.keys(result).length === 0){
            data.id = uuid();
            crearCita(data)

            updateCita({
                mascota: '', 
                propietario: '', 
                fecha: '', 
                hora: '', 
                sintomas: '',
                errors: {}
            })
        }
                
    }

    const { mascota, propietario, fecha, hora, sintomas, errors } = cita;

    return (
        <Fragment>                        
            <h1 className="text-4xl">Crear cita</h1>

                    
        <form 
            onSubmit={handleSubmit}
        >
            <label>Nombre Mascota</label>            
            <input 
                type="text"
                name="mascota"
                className="w-full rounded"
                placeholder="Nombre Mascota"
                onChange={handleChange}
                value={mascota}
            />
            {errors.mascota && <p className="w-full bg-red-700 rounded text-center bold text-white">{errors.mascota}</p>}
            <label>Nombre Dueño</label>
            <input 
                type="text"
                name="propietario"
                className="w-full rounded"
                placeholder="Nombre Dueño de la Mascota"
                onChange={handleChange}
                value={propietario}  
            />
            {errors.propietario && <p className="w-full bg-red-700 rounded text-center bold text-white">{errors.propietario}</p>}
            <label>Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="w-full rounded"
                onChange={handleChange}
                value={fecha}  
            />
            {errors.fecha && <p className="w-full bg-red-700 rounded text-center bold text-white">{errors.fecha}</p>}
            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="w-full rounded"
                placeholder="Hora"
                onChange={handleChange}
                value={hora}  
            />
            {errors.hora && <p className="w-full bg-red-700 rounded text-center bold text-white">{errors.hora}</p>}
            <label>Sintomas</label>
            <textarea 
                name="sintomas"
                className="w-full rounded"
                onChange={handleChange}
                value={sintomas}  
            ></textarea>
            {errors.sintomas && <p className="w-full bg-red-700 rounded text-center bold text-white">{errors.sintomas}</p>}
            <button
                type="submit"
                className="bg-purple-600 hover:bg-red-700 w-full rounded text-white"
            >Agregar cita</button>
        </form>
        </Fragment>                
    );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;