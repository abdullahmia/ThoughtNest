'use client'

import { useState } from 'react'
import NavDrawer from './NavDrawer'
import Navigation from './Navigation'

export default function Header() {
  // local state
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <>
      <NavDrawer isDrowerOpen={isDrawerOpen} toggoleDrower={toggleDrawer} />
      <Navigation toggleDrawer={toggleDrawer} />
    </>
  )
}
