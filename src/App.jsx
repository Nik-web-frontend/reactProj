import React, { useState } from 'react'

const App = () => {
    const [stor, setStor] = useState({
        name: '',
        age: ''
    });

    function setVal(nm, val){
        setStor({nm: {val}});

    }
  return (
    <div className='app'>
        <form onSubmit={(e)=>{
            e.preventDefault();
            
        }}>
            <input type="text" placeholder='Enter Name' name='name' value={stor} onChange={(e)=>{setVal()}}/>
            <input type='number' placeholder='Enter Age' name='age' value={stor} onChange={(e)=>{setStor([e.target.value])}}/>
            <button>Submit</button>

            <p>{stor}</p>
        </form>
    </div>
  )
}

export default App