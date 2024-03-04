import styles from './navbar.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";

import logo from '../../assets/images/logo.png'
import { useState } from 'react';
export function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.navbar} >
            <div>
                <img src={logo} />
                <button onClick={()=>setShow(!show)}>{show ? <AiOutlineClose/>:<VscThreeBars/>}</button>
            </div>
            <nav 
            className={styles.nav_items}
            style={{
                bottom: show ? "-250px":"0"
            }}
            >
                <a href="#">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                <a href="#">Projetos</a>
            </nav>
        </div>
    )
}
