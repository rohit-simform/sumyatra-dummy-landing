'use client'
import React, { ReactNode, useState } from 'react'
import Button from '../Button/Button'
import './Tab.scss'
export type tabDataProps = {
  label: string
  content: ReactNode
}
export type TabProps = {
  className?: string
  tabData: tabDataProps[]
  tabExtraContent?: ReactNode
}

export default function Tab({ className, tabData, tabExtraContent }: TabProps) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }
  return (
    <div className={`${className} tab-container`}>
      <div className="tab-header">
        <div className="tab-buttons">
          {tabData.map((tab, index) => (
            <button
              className={`tab-button ${index === activeTab && 'active'}`}
              key={index}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
              {/* <IconDot /> */}
            </button>
          ))}
        </div>
        {tabExtraContent}
      </div>
      <div className="tab-body">
        {tabData.map((tab, index) => (
          <div
            key={index}
            style={{ display: index === activeTab ? 'block' : 'none' }}
          >
            {tab.content}
          </div>
        ))}
      </div>
      <div className="tab-footer">
        <Button>Load More</Button>
      </div>
    </div>
  )
}
