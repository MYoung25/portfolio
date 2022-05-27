import styles from '../../styles/outline.givebackcincinnati.module.scss'

export interface bullet {
    variant: 'open' | 'closed'
    top: number | string
}

export function Outline ({ bullets = [], children }: { bullets?: bullet[], children?: JSX.Element | JSX.Element[] }) {
    return (
        <div className={styles.dashed}>
            {
                bullets.map(({ variant, top }, i) => (
                    <span key={i} className={ variant === 'open' ? styles.openBullet : styles.closedBullet} style={{ top }} />
                ))
            }
            
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}