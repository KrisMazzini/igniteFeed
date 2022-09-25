import styles from './styles.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'

export function Comment({content}) {
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
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
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