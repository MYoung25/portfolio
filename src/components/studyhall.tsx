import { ParallaxLayer } from "@react-spring/parallax"
import Image from 'next/image'
import styles from '../styles/studyhall.module.scss'

export function StudyHall () {
    return (
        <>
            <ParallaxLayer offset={1.1} speed={2}>
                <div className={styles.transition_container} />
                <div className={styles.container}>
                    StudyHall.org
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={.5}>
                <img src="/studyhall-logo.svg" />
            </ParallaxLayer>
        </>
    )
}
