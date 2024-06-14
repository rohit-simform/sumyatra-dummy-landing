"use client"
import React, { useEffect, useState } from 'react'

export default function CurrentYear() {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
      setCurrentYear(new Date().getFullYear());
  },[])
  return (
    currentYear
  )
}
