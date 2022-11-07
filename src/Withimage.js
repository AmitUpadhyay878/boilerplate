import React from 'react'
import imgf from './assets/images/Homepage.jpg'
const Withimage = () => {
  return (
    <div align="center">Withimage
            <br/>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <img src={imgf} alt="" height="300" width="300" />
            </div>
    </div>
  )
}

export default Withimage