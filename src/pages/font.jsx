import React from 'react'

export default function Myapp() {

  var font_list = [
    "h1",
    "h2",
    "h3",
    "h4",

    "p",
    "strong",
    "blockquote",
    "small",
  ]
  return (
    <div>
      
      <div className='m-12'>
        {font_list.map((e) => (

          <div className={`${e} p-4 `}>{`<${e} class="${e}">`} Segoe UI - Light </div>
        ))}
      </div>


    </div>
  )
}
