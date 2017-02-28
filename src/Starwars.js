import React from 'react'

const preloader = () => {
  return ( <div className='progress'>
             <div className='indeterminate'></div>
           </div> )
}
const showlist = (props) => {
  return props.dataApi.map((item, index) => {

    return (
      <li key={index} className='collection-item avatar'>
        <i className='material-icons circle red'>play_arrow</i>
        <span className='title'>{item.name}</span>
        <p>
          Gender:
          {item.gender}
        </p>
        <span><i className='material-icons'>grade</i>{item.height}</span>
        <a href='#!' className='secondary-content'><i className='material-icons'>grade</i></a>
      </li>
    )
  })
}

export const Starwars = (props) => {

  return (
    <div className='starwars'>
      <ul className='collection'>
        {props ? showlist(props) : preloader()}
      </ul>
    </div>
  )
}
