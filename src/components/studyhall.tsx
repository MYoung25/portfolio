import { ParallaxLayer } from "@react-spring/parallax"
import styles from '../styles/studyhall.module.scss'

export function StudyHall () {
    return (
        <ParallaxLayer offset={1.1}>
            <div className={styles.transition_container}>

            </div>
            <div className={styles.container}>
                Hello world
            </div>
        </ParallaxLayer>
    )
}
