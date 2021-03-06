import React from 'react'
import styles from '../../styles/inspiring-service.module.scss';

const stack = [
    { src: '/stack_icons/react.svg' },
    { src: '/stack_icons/mongodb.svg' },
    { src: '/stack_icons/kubernetes.svg' },
    { src: '/stack_icons/salesforce.svg' },
    { src: '/stack_icons/wordpress.svg' },
    { src: '/stack_icons/google_ads.svg' },
]

export function InspiringService () {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <a href="https://inspiringservice.org/communities/" className={styles.logo}>
                        <img src="/inspiring_service.png" alt="Inspiring Service Logo" />
                    </a>

                    <p className={styles.mission}>
                        Innovative technology to bring people close enough to care through community service.
                    </p>

                    <h2 className={styles.descriptionHeader}>IS-DB</h2>
                    <p className={styles.description}>
                        Custom data management system for Inspiring Service keeping millions of records consistent across all business systems.
                    </p>

                    <div className={styles.technologyUsed}>
                        {
                            stack.map(({ src }, i) => {
                                const elem = <img src={src} key={src} alt={src} className={styles.stackIcon} />

                                if (i === 3) {
                                    return <React.Fragment key="integration">
                                        <h4 className={styles.integrating}>
                                            Integrated with:
                                        </h4>
                                        {elem}
                                    </React.Fragment>
                                }

                                return elem
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}