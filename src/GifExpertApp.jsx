import React, {useState} from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Software']);
    
    const onAddCategory = (newCategory)=>{

        if(categories.includes(newCategory))return;
        setCategories([newCategory,...categories])

    };

    return (
    <>
    
    <h1>Gif Expert App<span className='sign'> By Robert Manotas</span></h1>
    
    <AddCategory 

    onNewCategory={(value) => onAddCategory(value)}
    />
        {
            categories.map(category =>(<GifGrid 
                key={category} 
                category={category}/>
            ))
        } 
    </>
    )
}
