import styles from './projectCard.module.css'
export function ProjectCard({name, techs, description, img,url}){
    return (
        <div className={styles.card}>
            <img src={img} alt={name} />
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{techs}</span>
                <a href={url}>Demo</a>
            </div>
        </div>
    )
}