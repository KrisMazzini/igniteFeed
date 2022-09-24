import styles from './styles.module.css'

import { Comment } from '../Comment'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/krismazzini.png"
                    />

                    <div className={styles.authorInfo}>
                        <strong>Kristopher Mazzini</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='22 de setembro às 15:32h' dateTime='2022-09-22 15:32:12'>Publicado há 1d</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    <a href=''>jane.design/doctorcare</a>
                </p>
                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Escreva um comentário...'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </form>
        </article>
    )
}