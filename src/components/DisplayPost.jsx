import React from 'react'

const DisplayPost = (props) => {
  const {image, prompt} = props.post;

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img 
      className='w-full h-auto object-cover rounded-xl' 
      src={image} 
      alt={prompt} 
      />
    </div>
  )
}

export default DisplayPost