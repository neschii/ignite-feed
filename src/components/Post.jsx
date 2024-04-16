import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://pbs.twimg.com/profile_images/1776038729381019648/F6UoWHCB_400x400.jpg"
          />
          <div className={styles.authorInfo}>
            <strong>John Nyan</strong>
            <span>Amante de Streamer</span>
          </div>
        </div>

        <time title="16 de Abril às 15:56h" dateTime="2024-04-16 15:56:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Alguma <a href=""> #edzinha</a> para ir no Emo x Otakus hoje?
        </p>
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
