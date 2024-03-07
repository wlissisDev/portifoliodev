import styles from './app.module.css'
import { Navbar } from "./components/navbar/navbar";
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Projects } from "./pages/projects/projects";


export function App() {


  return (
    <div className={styles.container}>
      <Navbar />
      <Home/>
      <About/>
      <Projects />
      <Contact/>
    </div>
  )
}

