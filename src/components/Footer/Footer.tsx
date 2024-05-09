import styles from './styles.module.scss';


export const Footer:React.FC = ()=>{

    return(
        <div className={styles.container}>
            <div className={styles.UpFooter}>Footer</div>
            <div className={styles.bottomFooter}>© 2024 RaiaDrogasil - Todos os direitos reservados.</div>
        </div>

    );

}
