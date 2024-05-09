import React from "react";
import {FaSearch} from 'react-icons/fa';
import inputStyle from  './styles.module.scss';



export const GenericInput: React.FC =()=>{

    return(
        <>
    
        <div className={inputStyle.searchContainer}>
             <input type="text" className="" placeholder="O que voce procura"/>
            <FaSearch className={inputStyle.searchIcon} />
        </div>

     
        </>
    );

}