import React, {useState} from 'react'
import Header from './components/Header'
const App = () => {


  function sub(e){
    e.preventDefault()

    console.log(first,'submitted')
    setfirst('')
  }
  let [first, setfirst] = useState('')
  return (

    <div>
      <Header/>
      
      <form onSubmit={sub}>
        <input type="text"  value={first} onChange={(e)=>{
          setfirst(e.target.value)
        
        }}/>
        <button>Submit</button>
      </form>
    </div> 
  )
}

export default App


// {/* <div>
// <button onClick={()=>setNum(num+10)}>Increment</button>
// <button onClick={()=>setNum(num-10)}>Decrement</button>
// </div> */}