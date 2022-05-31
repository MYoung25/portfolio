import { Outline } from '../give-back-cincinnati/outline';
import styles from '../../styles/whiteboard.module.scss';
import GitHubButton from 'react-github-btn'

export function Whiteboard () {
    return (
        <>
            <div className={styles.transitionContainer}>
                <Outline />
            </div>
            <div className={styles.leftBlob}></div>
            <div className={styles.background}>
                <h2>Serverless Whiteboard</h2>
                <GitHubButton href="https://github.com/MYoung25/serverless-whiteboard" aria-label='Serverless Whiteboard on GitHub'>Serverless Whiteboard</GitHubButton>
                <p>A learning exercise using serverless technology to make a real-time collaborative whiteboard.</p>
                <div className={styles.platformIconContainer}>
                    <img src='/whiteboard/pages.svg' alt='Cloudflare Pages' className={styles.platformIcon} />
                    <img src='/whiteboard/workers.svg' alt='Cloudflare Workers' className={styles.platformIcon} />
                </div>
            </div>
        </>
    )
}