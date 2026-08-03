import React, {useState} from 'react'

const App = () => {
  const [num, setnum] = useState({user: "Huzaifa", age: 20})
  const buttonClick = ()=>{
    console.log(count.user);
    const newNum = {...num}
    newNum.user = "Hassan"
    setnum(newNum)
    
    console.log(count.age);
    

  }
  return (
      <>
      <h1 className='mb-5 border-2 p-2 w-fit '>{count.user}, {count.age}</h1>
      <button className='border-2 p-2' onClick={buttonClick}> Click</button>
      </>
  )

}

export default App