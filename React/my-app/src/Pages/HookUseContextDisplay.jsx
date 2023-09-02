import React, { useContext } from 'react'
import { HookUseContext } from './HookUseContext'

function HookUseContextDisplay() {
    const value=useContext(HookUseContext)
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default HookUseContextDisplay