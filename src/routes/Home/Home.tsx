import { GenericFilterPanel } from "../../components/FilterPanel/GenericFilterPanel/GenericFilterPanel";
import { HomeFilterPanel } from "../../components/FilterPanel/HomeFilterPanel/HomeFilterPanel";




  export  const Home: React.FC = () => {
        return(
            <div > 
                 <nav>
                <HomeFilterPanel userSalute="Bem-Vindo!" userName='RD033' />
                
                </nav>

            </div>
           

        );

    }