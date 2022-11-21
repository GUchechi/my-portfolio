import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'

const Resume = () => {
  return (
    <section className="resume" id="resume">
    <PageHeaderContent 
      headerText = "My Resume"
      icon={<BsInfoCircleFill size={40}/>}
    />
  </section>
  )
}

export default Resume