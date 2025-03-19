"use client";

import React from 'react'
import {useTransition } from 'react'

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'
  
  const [isPending, startTransition] = useTransition()

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClass}`}>{children}</p>
    </button>
  )
}

export default TabButton