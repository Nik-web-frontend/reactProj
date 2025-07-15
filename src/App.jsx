import React, { useState } from 'react'

const App = () => {
    const [stor, setStor] = useState({
        name: '',
        contact: '',
        email: '',
        address: ''
    });
    const [res, setRes] = useState()
    const [form, setForm] = useState(false)
    const [showDetails, setShowDetails] = useState(false);
    const [error, setError] = useState([]);
    function setVal(nm, val) {
        setStor(prev => ({ ...prev, [nm]: val }));

    }
    function show(e) {
        const temp = [];
        e.preventDefault();
        const name = /^[a-zA-Z]{3,}$/.test(stor.name)
        const contact = /^[0-9]{10}$/.test(stor.contact)
        if (!name) {
            temp.push('Invalid Name!');
        }
        if (!contact) {
            temp.push('Invalid Contact!');
        }


        if (temp.length == 0) {
            setRes(stor);
            setStor({
                name: '',
                contact: '',
                email: '',
                address: ''
            })
            setForm(false)
            setShowDetails(true)
            setError([])
        }
        else {
            (setError(temp))
        }




    }
    return (
        <div className='app'>


            {!form && !showDetails && (
                <button className='showForm' onClick={() => { setForm(true) }}>Show Form</button>
            )}
            {form && !showDetails && (
                <form onSubmit={show}>
                    <h2>Form</h2>

                    <input type="text" placeholder='Enter Name (Atleast three letters)' name='name' value={stor.name} onChange={(e) => { setVal(e.target.name, e.target.value) }} required />

                    <input type='number' placeholder='Enter Contact Number' name='contact' value={stor.contact} onChange={(e) => { setVal(e.target.name, e.target.value) }} required />
                    <input type='email' placeholder='Enter Email (Only Valid Email Format)' name='email' value={stor.email} onChange={(e) => { setVal(e.target.name, e.target.value) }} required />

                    <input type='text' placeholder='Enter Address' name='address' value={stor.address} onChange={(e) => { setVal(e.target.name, e.target.value) }} required />

                    <button>Submit</button>
                </form>
            )}

            {error && (
                <div className="error-cont">

                    {error.map((i, idx)=>{
                        return <p key={idx} className='showErrors'>{i}</p>
                    })}
                </div>
            )}

            {!form && showDetails && (
                <div className='viewDetails'>
                    <div className="sub-cont">
                        <h2>Form is submitted successfully!</h2>
                        <p>Name: {res.name}</p>
                        <p>Contact: {res.contact}</p>
                        <p>E-mail: {res.email}</p>
                        <p>Address: {res.address}</p>
                        <button onClick={() => {
                            setShowDetails(false)

                        }}>Close</button>
                    </div>

                </div>
            )}
        </div>
    )
}

export default App

