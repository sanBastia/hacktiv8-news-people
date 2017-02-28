import React from 'react'

const doSearchAPI = (props) => {
  return props.dataApi.map((item, index) => {

    return (
      <li key={index}>
        <a href={item.url} target='_blank'>
          {item.title}
        </a>
      </li>
    )
  })
}
const showlistAPI = () => {
  return (
    <li>
    </li>
  )
}

export const Release5 = (props) => {

  return (
    <div className='release5'>
      <ul>
        {props.currentApiSearch ? doSearchAPI(props) : showlistAPI()}
      </ul>
    </div>
  )
}
