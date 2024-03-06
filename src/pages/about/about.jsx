import avatar from '../../assets/avatar/about.avif'

import styles from './about.module.css';
export function About() {
    return (
        <div id='about' className={styles.about}>
            <h2>Um pouco sobre mim...</h2>
            <div>
                <img src={avatar} />
                <p>
                    Olá, meu nome é Wlisses, sou desenvolvedor web fullstack. Atualmente estou cursando o 7º (sétimo) semestre do curso de Ciências da Computação, tenho 30 anos e estou em busca de uma vaga no mercado da programação. Sou uma pessoa tranquila e fácil de se relacionar. Tecnologia me fascina e é o assunto que mais gosto de conversar sobre.
                </p>
            </div>
        </div>
    )
}