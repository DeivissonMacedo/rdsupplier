

import styles from './styles.module.scss';
import { toggleButton } from '../../Buttons/ToggleButton/toggleButton';
import { GenericToggleButton } from '../../Buttons/ToggleButton/GenericToggleButton';

interface FilterPanelProps {
    panelToggleFunction: string;
    
}


export const GenericFilterPanel: React.FC<FilterPanelProps>=({panelToggleFunction})=>{
    return(
        <>
            <div className={styles.PanelContainer}>
                <span>{panelToggleFunction}</span>
             
                <div className={styles.toggle}>
                <GenericToggleButton/>

                </div>
            </div>
            
        </>


    );
}
