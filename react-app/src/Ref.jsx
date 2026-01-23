import React, { useState, useRef, useEffect } from 'react';

function Ref() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log('Component mounted');
    },);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'yellow';
       
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
            <input ref={inputRef}/>
        </div>
    )
}
export default Ref;