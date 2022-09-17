import { Header } from "./components/Header";
import { Post } from "./Post"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Isla"
            content="Lorem ipsum dolor sit amet."
          />
          <Post 
            author="Zoe"
            content="Eu sou uma yorkshire que adoro passear."
          />
        </main>
      </div>
    </div>
  )
}

export default App
