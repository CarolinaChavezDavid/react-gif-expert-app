import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['The office'])

    const addCategory = (value) =>{
        if(categories.includes(value)) return;
        setCategories([value, ...categories])
    }
  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory onNewCategory ={ addCategory }/>
            { categories.map(category => (
                <GifGrid 
                    key= { category} 
                    category={ category} 
                />
            ))
            }   
    </>
  )
}
