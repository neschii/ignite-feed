import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);
 
 function handleDeleteComment() {
  onDeleteComment(content);
}

  function handleLikeComment() { 
  setLikeCount(likeCount +1);
}

return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://pbs.twimg.com/media/GBkTXRNWwAAgBVU?format=jpg&name=large" />

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
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtidas <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
