import { useEffect } from "react";
import searchCompletedImg from "../images/corporateImages/search_completed.png";
import styles from './styles.module.scss';

interface SearchResultsProps {
    productSearchName: string;
    resultsNumber: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ productSearchName, resultsNumber }) => {
    

    return (
        <div className={styles.container}>      
            <img src={searchCompletedImg} alt="search Completed with results:" />  
            <span className={styles.ProductName} >{productSearchName}</span>
            <span className={styles.ResultsNumber}>{resultsNumber} results</span>
        </div>
    );
}