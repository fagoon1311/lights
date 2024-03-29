import React, { useState } from 'react'

const Cell = ({filled, onClick}) =>{
    return (
        <button className='bg-transparent border border-black h-20 w-20 m-5' onClick={onClick}></button>
    )
}

const Layout = () => {
    const [order, setOrder] = useState([]) // an empty array to store the order in which buttons are pressed.
    const config = [
        [1, 1, 1], 
        [1, 0, 1],
        [1, 1, 1]   // a matrix to represnet the layout/ ho many blocks we want.
    ]

    const activateCells = (index) => {}


    return (
        <div className=' flex justify-center items-center h-screen'>
          <div className='border border-black text-center p-5' style={{ display: 'inline-block' }}>
            <div className='grid grid-cols-3'>  
            {
              config.flat().map((value, index) => (
                value ? <Cell key={index} filled={false} onClick={() => activateCells(index)} />
                :
                <span></span>
              ))
            }
            </div>
          </div>
        </div>
      );
      
}

export default Layout