import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';

//mockado
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alesandraisla.png',
      name: 'Alesandra Isla',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto'},
      { type: 'link', content: 'yuna.design/tiposdecasas'},
    ],
    publishedAt: new Date('2022-09-18 15:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lourivaldo.png',
      name: 'Lourivaldo Vasconcelos',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto'},
      { type: 'link', content: 'yuna.design/tiposdecasas'},
    ],
    publishedAt: new Date('2022-09-19 15:30:00'),
  },
]

//iteracao - repetir alguma coisa, percorrer um array
function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
