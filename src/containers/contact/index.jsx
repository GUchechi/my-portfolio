import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'

const Contact = () => {
  return (
    <section className="contact" id="contact">
    <PageHeaderContent 
      headerText = "Contact Me"
      icon={<BsInfoCircleFill size={40}/>}
    />
  </section>
  )
}

export default Contact