import React from 'react'

const ListItem = ({className,ItemName,Icon,children}) => {
  return (
    <li className={className}>{ItemName}{Icon}{children}</li>
  )
}

export default ListItem