import React from 'react'

export default function Myapp() {

  let colors = [
    "primary",
    "primary-dark",
    "primary-light",
    "secondary",
    "secondary-dark",
    "success",
    "success-dark",
    "warning",
    "error",
    "error-dark",
    "muted",
  ]


  return (
    <div>

      <h4 className="h4 font-bold">background colors</h4>

      <div className='grid grid-cols-5 gap-8 m-12'>
        {colors.map((e) => (

          <div className={`bg-${e} p-4 text-center`}>bg-{e}</div>
        ))}
      </div>


      <h4 className="h4 font-bold">text colors</h4>

      <div className='grid grid-cols-5 gap-8 m-12'>
        {colors.map((e) => (

          <div className={`text-${e} font-bold p-4 text-center`}>text-{e}</div>
        ))}
      </div>



    </div>
  )
}
