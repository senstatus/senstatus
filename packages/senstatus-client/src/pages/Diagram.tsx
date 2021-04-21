import React from 'react'
import ContentEditable from '../components/Base/ContentEditable'

function Diagram() {
  return (
    <div className="h-screen p-12 bg-yellow-100 font-sans tracking-wider">
      <h1></h1>
      <div className="flex items-center">
        <div className="p-6 font-bold bg-white text-lg rounded-2xl min-w-[280px] max-w-160 shadow-xl">
          <ContentEditable value="" onChange={() => {}} onBlur={() => {}} onResize={(props) => console.log(props)} />
        </div>
      </div>
    </div>
  )
}

export default Diagram
