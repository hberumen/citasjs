import React from 'react';
import PropTypes from "prop-types";


const Cita = ({cita, deleteCita}) => (    
    <div className="bg-white divide-y-2 w-full m-10 rounded p-3">
        <p><span className="font-bold pr-2">Mascota:</span><span>{cita.mascota}</span></p>
        <p><span className="font-bold pr-2">Dueño:</span> <span>{cita.propietario}</span></p>
        <p><span className="font-bold pr-2">Fecha:</span> <span>{cita.fecha}</span></p>
        <p><span className="font-bold pr-2">Hora:</span> <span>{cita.hora}</span></p>
        <p><span className="font-bold pr-2">Sintomas:</span> <span>{cita.sintomas}</span></p>
        <div className="flex flex-wrap  w-full justify-end">
            <button
                className="bg-red-600 hover:bg-purple-700 rounded text-white p-3"
                onClick={() => deleteCita(cita.id)}
            >Eliminar</button>
        </div>        
    </div>
)

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}

export default Cita;