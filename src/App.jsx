import { Header } from "./components/Header";
import { Post } from "./Post"
import './styles.css';

function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Isla"
        content="Lorem ipsum dolor sit amet."
      />
      <Post 
        author="Zoe"
        content="Eu sou uma yorkshire que adoro passear."
      />
    </div>
  )
}

export default App
