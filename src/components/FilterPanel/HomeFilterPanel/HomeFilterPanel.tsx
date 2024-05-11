import { useEffect } from "react";
import wellcomeImg from "../../images/corporateImages/wellcomeoIMG.png"
import styles from './styles.module.scss';

interface HomeFilterPanelProps {
    userSalute: string;
    userName: string;
}

export const HomeFilterPanel: React.FC<HomeFilterPanelProps> = ({ userSalute, userName }) => {
    

    return (
        <div className={styles.container}>      
            <img src={wellcomeImg} alt="Welcome"/>  
            <span className={styles.saluteText} >{userSalute}</span>
            <span className={styles.usernameText}>{userName} </span>
        </div>
    );
}