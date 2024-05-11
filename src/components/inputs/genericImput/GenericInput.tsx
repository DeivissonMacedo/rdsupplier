import React, { FormEvent, useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';


import inputStyle from './styles.module.scss';
import { MainSearch } from "../../../routes/MainSearch/MainSearch";
import { useNavigate } from "react-router-dom";


export const GenericInput: React.FC = () => {
    const [productSearched, setProductSearched] = useState("");
    const  navigate =useNavigate();


    function handleSearchClick(event: FormEvent) {
        event.preventDefault();
        console.log(productSearched);
        setProductSearched("");
        return navigate("/search_result");
    }
    


    return (
        <div className={inputStyle.searchContainer}>
            <form onSubmit={handleSearchClick}>


                <input type="text"
                    value={productSearched}
                    onChange={(inputTyped) => setProductSearched(inputTyped.target.value)}
                    placeholder="O que você procura"
                    id="searchBar" />
                
                    <button type="submit" className={inputStyle.searchIcon}>

                        <FaSearch />

                    </button>
                
            </form>
        </div>
    );
}