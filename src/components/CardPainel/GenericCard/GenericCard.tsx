import { FaSquare } from "react-icons/fa";
import styles  from './styles.module.scss';
import productExampleImg from '../../images/productExampleImage/prodImg1.png'
import { GreenButton } from "../../Buttons/greenButton/greenButton";

export const GenericCard:React.FC = ()=>{
    return(
        <>
            <div className={styles.container}>
                <img src = {productExampleImg}/>
                <div className={styles.textContainer}> <span className={styles.ProductName}>Anthelius Aircilium
                 Anti-OleosidadeFPS 30 Sem Cor 60g</span>
               <span className={styles.BrandName}>La Roche-Posay</span>
               </div>
              
               


            <GreenButton />
            </div>

        </>

    );

}