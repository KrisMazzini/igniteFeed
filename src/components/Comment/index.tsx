import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './styles.module.css'

import { Avatar } from '../Avatar'

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(prevCount => prevCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/krismazzini.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Fernandes</strong>
                            <time title='24 de Setembro às 08:02' dateTime='2022-09-24 08:02:47' >Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}