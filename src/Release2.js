import React from 'react'

const doSearch = (props) => {
  return props.datanumber2.filter((data) => {
    return data.title === props.currentSearch
  }).map((item) => {

    return (
      <li key={item.objectID}>
        <a href={item.url} target='_blank'>
          {item.title}
        </a>
        <small>{item.author}</small>
      </li>
    )
  })
}
const showlist = (props) => {
  return props.datanumber2.map((item) => {

    return (
      <li key={item.objectID}>
        <a href={item.url} target='_blank'>
          {item.title}
        </a>
      </li>
    )
  })
}

export const Release2 = (props) => {

  return (
    <div className='release2'>
      <ul>
        {props.currentSearch ? doSearch(props) : showlist(props)}
      </ul>
    </div>
  )
}
