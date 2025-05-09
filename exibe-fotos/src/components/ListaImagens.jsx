// rafce
import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({photos, imgStyle}) => {
  return (
    photos.map((photo, key) => (
      <Imagem 
        imgStyle={imgStyle} 
        key={key} 
        src={photo.src.small} 
        alt={photo.alt}/>
    ))
  )
}

export default ListaImagens