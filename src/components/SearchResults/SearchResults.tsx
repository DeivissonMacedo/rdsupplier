import searchCompletedImg from "../images/corporateImages/search_completed.png";
import styles from './styles.module.scss';
export const SearchResults: React.FC = () => {
    return (
        <div className={styles.container}>      
              <img src={searchCompletedImg} alt="search Completed with results:" />  
                <span className={styles.ProductName}>Product Find</span>
                <span className={styles.ResultsNumber}>6.372 results</span>
        </div>

    );



}