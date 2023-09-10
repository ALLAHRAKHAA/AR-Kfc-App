import React from "react";
import {categories} from "../data1/categories";


// let arr=["Primary", "Secondary", "Success", "Danger", "Warning", "Info"];
export default function CatButtons({onCatSelection, selectedCatId}){

    return(
        <>
{
    categories.map(cat =>(
        <button 
        type="button" 
        className={
        `m-1 btn 
        ${cat.id === selectedCatId? 'btn-info': 
        'btn-warning'}`
    }
         key={cat.id}
         onClick={()=> onCatSelection(cat.id)}
         >{cat.title}</button>
    ))

    }
        </>
    );
}