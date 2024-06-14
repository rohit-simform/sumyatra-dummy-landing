'use client'
import React, { useState } from 'react'
import './Accordion.scss'

export type AccordionProps = {
  index: number
  title: string
  desc: string
}

export function Accordion({ index, title, desc }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion">
      <div className="accordion-header">
        <span className="accordion-index">
          {index < 10 ? `0${index}` : index}
        </span>
        <p className="accordion-title">{title}</p>
        <div
          className={`accordion-icon ${isOpen ? 'cross' : 'plus'}`}
          onClick={handleToggle}
        >
          {/* <IconPlus /> */}
        </div>
      </div>
      <div className={`accordion-content ${isOpen && 'open'}`}>
        <p>{desc}</p>
      </div>
    </div>
  )
}
