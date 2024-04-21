import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
            <Avatar hasBorder src="https://pbs.twimg.com/profile_images/1779720956740526080/cKWcz8vK_400x400.jpg" />     
          <div className={styles.authorInfo}>
            <strong>Gabriel Migliorini</strong>
            <span>futuro DevOps</span>
          </div>
        </div>

        <time title="16 de Abril às 15:56h" dateTime="2024-04-16 15:56:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Aprendendo <a href=""> #kubernetes</a> hoje enquanto escuto Taylor Swift. 
     
        </p>   <p> eu vou com calma, um dia de cada vez, não importa quanto tempo demora!!</p>
      </div>

      <form className={styles.comment}>
        Comentários
        <textarea placeholder="Deixe um comentário" />
        <footer>
          {' '}
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.comment}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
