import React from 'react'
import { useSelector } from 'react-redux'
import ComponentTwo from './ComponentTwo'


const ComponentOne = () => {
          const {value}  =    useSelector((state) => state.counter )
  return (
    <div>ComponentOne  {value}
       <ComponentTwo/>
    </div>
  )
}

export default ComponentOne