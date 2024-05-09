import { useState } from 'react';

import styles from './styles.module.scss';
import rdSupplierLogo from'../images/logos/rdsupplier.png';
import { ProfileButton } from '../Profile/ProfileButton';
import {GenericInput} from '../inputs/genericImput/GenericInput'

export const Header: React.FC = () => {

    const variavel =useState
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div><img src = {rdSupplierLogo}/></div>

                <div><GenericInput/></div>

                <div><ProfileButton/></div>


            </div>
        </header>


    )




}