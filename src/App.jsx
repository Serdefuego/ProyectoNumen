import React from 'react'
import Footer from './components/Footer/Footer'
import"../src/App.css"

const detalle = [{
  id:1,
  parrafo:"aqui va la informacion del contacto"
},
{
  id:2,
  parrafo:"aqui va la informacion de los horarios"
},
{
  id:3,
  parrafo:"aqui va la info de ayuda"
},
{
  id:4,
  parrafo:"aqui van las imagenes de los iconos de acceso a las redes"
  
}]

const App = () => {
  return (
    <div>
     <Footer detalle={detalle} />
    </div>
  )
}

export default App
