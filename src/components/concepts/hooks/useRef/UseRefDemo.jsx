// useRef Demo : Focusing Input Box using DOM Access

import React, { useEffect, useRef } from 'react'

export default function UseRefDemo() {

    // Step 1: Create a reference container (Initially null)
    // After rendering, this will store the actual input DOM element.
    const userNameRef = useRef(null);

    // Step 2: When button is clicked -> focus the input
    // userNameRef.current gives access to the real DOM element
    const focusInput = () =>{
        userNameRef.current.focus();       // Places cursor inside input
        console.log(userNameRef.current);  // Prints actual <input> DOM node
    }

    // useEffect(()=>{
    //     userNameRef.current.focus();
    // },[])

  return (
    <div>

        {/* Step 3: Attach the ref to the input element */}
        {/* React will automatically store the DOM element inside userNameRef.current */}
        <input 
            type="text" 
            className='border p-2 m-4'
            placeholder='Enter Name'
            ref={userNameRef}
        />

        {/* Step 4: Button to trigger focusInput function */}
        <button 
            onClick={focusInput} 
            className='ml-4 bg-blue-500 text-white px-4 py-2'
        >
            Focus Input
        </button>

    </div>
  )
}
