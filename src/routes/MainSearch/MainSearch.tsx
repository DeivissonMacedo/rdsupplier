import React, { Component, useState } from 'react';
import { CardValue, ThemeProvider } from "@raiadrogasil/pulso-react-components/";
import { GenericCard } from '../../components/CardPainel/GenericCard/GenericCard';
import { GenericFilterPanel } from '../../components/FilterPanel/GenericFilterPanel/GenericFilterPanel';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import imgProd1 from '../../components/images/productExampleImage/prodImg1.png';
import imgProd2 from '../../components/images/productExampleImage/prodImg2.png';
import imgProd3 from '../../components/images/productExampleImage/prodImg3.png';

import styles from './styles.module.scss';

/*interface catalogProducts {
    product: JSX.Element;
}
*/

export const MainSearch: React.FC = () => {
  
  

    return (
        <>
        
            <nav>
                <SearchResults productSearchName="Anthelius Aircillium" resultsNumber='3' />
                <GenericFilterPanel panelToggleFunction="Filter By Generics" />
                <GenericFilterPanel panelToggleFunction="Filter By RX" />
                <GenericFilterPanel panelToggleFunction="Show without taxes" />
            </nav>

            <main>
               
                <GenericCard 
                productName = "Anthelius Aircilium Anti-OleosidadeFPS 30 Sem Cor 6ml"
                productImage ={imgProd1}/>
                
                <GenericCard  productName = "Anthelios XL-protect FPS30 antioxidante 200ml"
                productImage ={imgProd2}/>

                <GenericCard  productName = "Protetor Solar Anthelios AE Pigmentation 60ml"
                productImage ={imgProd3}/>
               


            </main>

            <div className={styles.cart}>
                <CardValue
                    label="Carrinho"
                    value='237,00'
                    onClick={function noRefCheck() { }}
                    onMouseDown={function noRefCheck() { }}
                    onMouseUp={function noRefCheck() { }}
                />
            </div>
        </>
    );
}