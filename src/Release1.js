import React from 'react'

export const Release1 = (props) => {

  return (
    <div className='release1'>
      <ul>
        {props.datanumber1.map((item, index) => {
           return (
             <li key={index}>
               {item}
             </li>
           )
         })}
      </ul>
    </div>
  )
}
