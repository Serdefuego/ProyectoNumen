import React from 'react'
import Card from '../Card/Card'
import { BsInstagram } from 'react-icons/bs';

const Footer = ({detalle}) => {
  return (
    <div>
        {detalle.map(({parrafo,id}) => <Card key={id} parrafo={parrafo}/>)}        
        <BsInstagram/>
    </div>
  )
}

export default Footer