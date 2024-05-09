

import styles from './styles.module.scss';
import { toggleButton } from '../../Buttons/ToggleButton/toggleButton';
import { GenericToggleButton } from '../../Buttons/ToggleButton/GenericToggleButton';
export const GenericFilterPanel: React.FC=()=>{
    return(
        <>
            <div className={styles.PanelContainer}>
                <span>Mostrar Apenas Genericos</span>
             
                <div className={styles.toggle}>
                <GenericToggleButton />

                </div>
            </div>
            
        </>


    );
}
