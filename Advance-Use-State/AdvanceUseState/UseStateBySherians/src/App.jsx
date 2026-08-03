import React, {useState} from 'react'

const App = () => {
  const [first, setfirst] = useState({user: 'Huzaifa', age: 20})
  const change = ()=>{
      let dupObj = {...first}
      dupObj.user = "Hassan";
      dupObj.age = 22;
      console.log(dupObj)
      setfirst(dupObj)
  }
  return (
    <div>
      <h1>{first.user}</h1>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default App