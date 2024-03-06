import styles from './projects.module.css'
import { ProjectCard } from '../../components/projectcard/projectCard'

import carteira from '../../assets/images/carteira.jpg'

export function Projects() {
    return (
        <div id="projects" className={styles.container}>
            <h2 className={styles.title}>Projetos</h2>
            <div className={styles.list}>
                <ProjectCard
                    name="Notas financeira"
                    description="Qualquer coisa amais ..."
                    techs="Reactjs, Tailwindcss"
                    url="#"
                    img={carteira}
                    reverser={true}
                />
                <ProjectCard
                    name="Notas financeira"
                    description="Qualquer coisa amais ..."
                    techs="Reactjs Tailwindcss"
                    url="#"
                    img={carteira}
                />
                <ProjectCard
                    name="Notas financeira"
                    description="Qualquer coisa qualque coisa qualqier oisa qualque coisa qualqier oisa qualque coisa qualqier oisa qualque coisa qualqier coisaasdasdasdQualquer coisa qualque coisa qualqier coisaasdasdasd ..."
                    techs="Reactjs Tailwindcss"
                    url="#"
                    img={carteira}
                    reverser={true}
                />
              
            </div>

        </div>
    )
}