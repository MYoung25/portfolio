import styles from '../../styles/outline.givebackcincinnati.module.scss'

export interface bullet {
    variant: 'open' | 'closed'
    top: number
}

export function Outline ({ bullets = [], children }: { bullets?: bullet[], children?: JSX.Element[] }) {
    return (
        <div className={styles.dashed}>
            {
                bullets.map(({ variant, top }, i) => (
                    <div key={i} className={ variant === 'open' ? styles.openBullet : styles.closedBullet} style={{ top }} />
                ))
            }
            
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}