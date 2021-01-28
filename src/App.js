import React, { Fragment, useState, useEffect } from 'react'
import Cita from './components/Cita'
import Formulario from './components/Formulario'

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }

  const [citas, updateCitas] = useState(citasIniciales)

  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }      
  }, [citas])

  const crearCita = cita => {
      updateCitas([
        ...citas,
        cita
      ])
  }

  const deleteCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id)
      updateCitas(nuevasCitas)
  }

  const titulo = citas.length == 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1 className="text-5xl font-bold">Administrador de pacientes.</h1>
      <div className="container mx-auto my-2">
        <div className="grid md:grid-cols-2 gap2 grid-cols-1">
          <div>
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div>
          <h1 className="text-4xl font-bold">{titulo}</h1>
            {citas.map( cita => (
              <Cita 
              deleteCita={deleteCita}
              key={cita.id}
              cita={cita}
            />
            ))}
          </div>
        </div>        
      </div>
    </Fragment>
  );
}

export default App;
