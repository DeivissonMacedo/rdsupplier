import { FaSquare } from "react-icons/fa";
import styles from './styles.module.scss';
import productExampleImg from '../../images/productExampleImage/prodImg1.png'
import { GreenButton } from "../../Buttons/greenButton/greenButton";
import { ThemeProvider } from "@raiadrogasil/pulso-react-components";




interface productSttsProps {
    productName: string;
    productImage:string;
   
}

export const GenericCard: React.FC<productSttsProps> = ({productName,productImage}) => {
    return (
        <>
            <ThemeProvider theme= 'raiadrogasil'>
                <div className={styles.container}>
                    <img src={productImage} />
                    <div className={styles.textContainer}>
                         <span className={styles.ProductName}>{productName}</span>
                        <span className={styles.BrandName}></span>
                        
                    </div>
                    <GreenButton
                    />
                </div>
            </ThemeProvider>
        </>

    );

}