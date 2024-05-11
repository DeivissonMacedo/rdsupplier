
import React from 'react';
import styles from './styles.module.scss';

interface SearchResultsProps {
    categoryTitle: string;
   
}

export const otherFilterPanel: React.FC<SearchResultsProps> = ({categoryTitle}) => {

    return (
   
            <div className={styles.PanelContainer}>
                <span>{categoryTitle}</span>
                <span>example link</span>
                
            </div>

  

    );

}