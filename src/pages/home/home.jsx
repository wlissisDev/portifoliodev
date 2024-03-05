import styles from './home.module.css'
import foto from '../../assets/avatar/foto.jpeg'
export function Home() {
    return (
        <div id='home' className={styles.container}>
            <div className={styles.info}>
                <h1>
                    Wlissis
                    <span>Ribeiro</span>
                </h1>
                <h3>Desenvolvedor FullSatck</h3>
                <span className={styles.techs}>Tech Stack |
                    <span>Reactjs</span>
                    <span>SpringBoot</span>
                    <span>Git</span>
                    <span>PostgreSQL</span>
                </span>
            </div>
            <div>
                <img src={foto} className={styles.foto}/>
            </div>
        </div>
    )
}

