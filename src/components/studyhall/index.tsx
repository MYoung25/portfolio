import { ParallaxLayer } from "@react-spring/parallax"
import styles from '../../styles/studyhall.module.scss'

const stack = [
    { src: '/stack_icons/vue.svg' },
    { src: '/stack_icons/node.svg' },
    { src: '/stack_icons/postgres.svg' },
    { src: '/stack_icons/redis.svg' },
    { src: '/stack_icons/mongodb.svg' },
    { src: '/stack_icons/kubernetes.svg' },
    { src: '/stack_icons/php.svg' },
]

export function StudyHall () {
    return (
        <>
            <ParallaxLayer offset={1} speed={.05}>
                <div className={styles.container}>
                    <a href="https://studyhall.org">
                        <img src="/studyhall/logo.svg" height="100px" width="400px" alt="StudyHall Logo" />
                    </a>
                    <p className={styles.about}>
                        StudyHall offers free, virtual, one-on-one support through an Online Whiteboard tool to improve reading skills of students in need with qualified volunteer tutors. 
                    </p>

                    <a href="https://studyhall.org" className={styles.learnMore}>Learn More</a>

                    <div className={styles.technologyUsed}>
                        {
                            stack.map(({ src }) => (<img src={src} key={src} alt={src} className={styles.stackIcon} />))
                        }
                    </div>

                </div>
            </ParallaxLayer>
        </>
    )
}
