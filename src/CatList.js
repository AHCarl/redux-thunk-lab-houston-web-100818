import React from 'react'

const CatList = (props) => {
  console.log(props)

  return (
    <div>
      {props.catPics.map(cat => <img src={cat.url} key={cat.id} alt={cat.id} />)}
    </div>
  )
}

export default CatList