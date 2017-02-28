import React from 'react'

export const SearchApi = (props) => {
  return (
    <form>
      <input type='text' onChange={props.handleApiChange} placeholder="Search via 'algolia API' " />
    </form>
  )
}
