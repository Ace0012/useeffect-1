import React from 'react'

const Saved = ({info,id}) => {


  return (
    <div key= {id} >
      

<button onClick= {info}>save</button>
    </div>
  )
}

export default Saved