import styles from './navbar.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { FaDownload } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';
export function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.navbar} >
            <div>
                <img src={logo} />
                <button onClick={() => setShow(!show)}>{show ? <AiOutlineClose /> : <VscThreeBars />}</button>
            </div>
            <nav
                className={styles.nav_items}
                style={{
                    bottom: show ? "-250px" : "0"
                }}
            >
                <a href="#home">Início</a>
                <a href="#about">Sobre</a>
                <a href="#contact">Contato</a>
                <a href="#projects">Projetos</a>
                <a href='../../assets/curriculo.pdf' download='curriculo.pdf' className={styles.btn}>
                    Resumo
                    <FaDownload style={{marginLeft:"5px"}}/>
                </a>
            </nav>
        </div>
    )
}
