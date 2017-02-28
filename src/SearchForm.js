import React from 'react'

export const SearchForm = (props) => {
  return (
    <form>
      <input type='text' onChange={props.handleChange} placeholder="Search via list on 'react' or 'redux' " />
    </form>
  )
}
