import styles from './styles.module.css'

import { PencilSimpleLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://github.com/krismazzini.png"
                />

                <strong>Kristopher Mazzini</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilSimpleLine size={20} />
                    Edit profile
                </a>
            </footer>
        </aside>
    )
}