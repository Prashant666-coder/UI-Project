import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className="h-full w-3/4 overflow-hidden p-6">
      <div id='right' className="h-full flex overflow-x-auto gap-10">

        {props.users.map(function (elem, idx) {

          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>

        })}

      </div>
    </div>
  )
}

export default RightContent