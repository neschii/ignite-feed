import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://pbs.twimg.com/media/GBkTXRNWwAAgBVU?format=jpg&name=large" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Luis Rebaixado</strong>
              <time
                title="16 de Abril às 15:56h"
                dateTime="2024-04-16 15:56:32"
              >
                Comentado há 1h atras
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Procurando alguma chineszinha para ir junto!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtidas <span>2</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
