import React from 'react'
import Aboutheader from './components/Aboutheader'
import Aboutconnect from './components/Aboutconnect'
import Aboutanimation from './components/Aboutanimation'
import Aboutcontent1 from './components/Aboutcontent1'

const page = () => {
  return (
    <div>
      <Aboutheader/>
      <Aboutcontent1/>
      <Aboutanimation/>
      <Aboutconnect/>
    </div>
  )
}

export default page