import { useState } from 'react'
import './App.css'
import TagList from './components/TagList'
function App() {
  return (
    <>
      <div className='bg-black'>
        <TagList tagList={['All', 'Test', 'Sample']}
          onTagClick={console.log}
        >
      </div>
    </>
  )
}

export default App
