import { useState } from 'react';

import styles from './styles.module.scss';
import rdSupplierLogo from '../images/logos/rdsupplier.png';
import { ProfileButton } from '../Profile/ProfileButton';
import { GenericInput } from '../inputs/genericImput/GenericInput'
import { CardValue } from "@raiadrogasil/pulso-react-components/";
import ThemeProvider from "@raiadrogasil/pulso-react-components/ThemeProvider";
import { Link } from "react-router-dom";


export const Header: React.FC = () => {

    const variavel = useState
    return (
        <ThemeProvider theme="raiadrogasil">

            <header className={styles.header}>
                <div className={styles.container}>

                <Link to = "/"><div><img src={rdSupplierLogo} /></div></Link>

                    <div><GenericInput /></div>
                  
                    <div><ProfileButton /></div>
                


                </div>
            </header>

        </ThemeProvider>



    )




}