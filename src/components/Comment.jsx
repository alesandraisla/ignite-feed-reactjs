import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/alesandraisla.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Alesandra Isla</strong>
            <time title="16 de Setembro às 21:42" dateTime="2022-09-16 21:42:00">
              Cerca de 1h atrás
            </time>
          </div>
          <button title='Deletar comentário'>
            <Trash size={24} />
          </button>
        </header>
        <p>Muito bom!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}