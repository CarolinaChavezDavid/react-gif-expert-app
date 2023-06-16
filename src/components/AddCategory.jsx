import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('The Office')

    const onInputChange = (event) => {
        setinputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [ inputValue, ...categories ])
        onNewCategory( inputValue.trim() )
        setinputValue('')
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
        type='text'
        placeholder='Search gifs'
        value={ inputValue }
        onChange={ onInputChange } />
    </form>
    
  )
}
