import styles from './styles.module.scss';
import pharmacyIcon from '../../assets/icons/pharmacyIcon.png';
export const ProfileButton: React.FC = () => {
    return (
        <div className = {styles.container}>
           <img src={pharmacyIcon} />
            <div className={styles.block}>


                <div className={styles.align}>
                    <span>Filial</span>
                    <span>RD033</span>
                </div>



            </div>

        </div>
    );



}