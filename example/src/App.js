import React from 'react'
import { useMyHook } from '@matt.woodage/react-month'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App