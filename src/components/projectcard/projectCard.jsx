import styles from './projectCard.module.css'
export function ProjectCard({ name, techs, description, img, url, reverser }) {
    return (
        <div style={{
            flexDirection: reverser ? "row-reverse" : "row"
        }} className={styles.card}>
            <div className={styles.image}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>Techs | {techs}</span>
                <a href={url}>Demo</a>
            </div>
        </div>
    )
}