import styles from './projects.module.css'
import { ProjectCard } from '../../components/projectcard/projectCard'

import carteira from '../../assets/images/carteira.jpg'

export function Projects() {
    return (
        <div id="projects" className={styles.container}>
            <h1 className={styles.title}>Projetos</h1>
            <div className={styles.list}>
                <ProjectCard
                    name="Notas financeira"
                    description="Qualquer coisa amais ..."
                    techs="Reactjs Tailwindcss"
                    url="#"
                    img={carteira}
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
                    description="Qualquer coisa amais ..."
                    techs="Reactjs Tailwindcss"
                    url="#"
                    img={carteira}
                />
                  <ProjectCard
                 name="Notas financeira"
                 description="Qualquer coisa amais ..."
                techs="Reactjs Tailwindcss"
                url="#"
                img={carteira}
                />
            </div>

        </div>
    )
}