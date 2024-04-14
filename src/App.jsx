import { Post } from './Post';
import { Header } from './components/Header';


import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App()  { 
    return (
        <div>
        <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Breno Lemes"
          content="Casa de Carnes Imigrantes é bom demais, sô!"
          />
          <Post 
          author="Arganoz"
          content="Mára Calë. A Ariana Grande é muito diva!"
          />

      </main>
        </div>
      </div>

  )
}

