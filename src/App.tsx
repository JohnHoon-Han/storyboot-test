import './App.css'
import TagList from './components/TagList'
function App() {
  return (
    <>
      <div className="">
        <TagList
          tagList={['All', 'Test', 'Sample']}
          onTagClick={tag => {
            console.log(tag)
          }}
        />
      </div>
    </>
  )
}

export default App
