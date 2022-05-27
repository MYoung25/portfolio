import { ParallaxLayer } from "@react-spring/parallax"
import { Outline } from './outline'
import styles from '../../styles/givebackcincinnati.module.scss'

export function GiveBackCincinnati () {
    return (
        <>
            <ParallaxLayer offset={2.8} speed={.2} factor={.8}>
                <Outline>
                    <div className={styles.transition} />
                </Outline>
            </ParallaxLayer>
            <ParallaxLayer
                offset={3.2}
                speed={.3}
            >
                <div className={styles.contentContainer}>
                    <Outline>
                        <div className={styles.content}>
                            <a href="https://givebackcincinnati.org">
                                <img src="/gbc/half_circle.svg" alt="Half Circle" className={styles.logo} />
                            </a>
                            
                            <div className={styles.outlineContainer}>
                                <Outline
                                    bullets={[
                                        {variant: 'open', top: 0},
                                        {variant: 'closed', top: '39%'},
                                        {variant: 'closed', top: '60%'},
                                        {variant: 'closed', top: '82%'},
                                    ]}
                                >
                                    <div className={styles.missionContainer}>
                                        <h2 className={styles.mission}>Developing Today&apos;s Communities and Tomorrow&apos;s Leaders</h2>
                                        <p className={styles.point} style={{ top: '30%' }}>More than 20,000 hours of service donated to-date</p>
                                        <p className={styles.point} style={{ top: '51%' }}>500+ houses painted throughout the Greater Cincinnati</p>
                                        <p className={styles.point} style={{ top: '73%' }}>Worldwide top 10 largest Thanksgiving meal</p>
                                    </div>
                                </Outline>
                            </div>


                            <span className={styles.titles}>
                                <p>Development Director<br /> 2018-2020</p>
                                <p>President<br /> 2020-2022</p>
                                <p>Technology Director<br /> 2022-Present</p>
                            </span>
                        </div>
                    </Outline>
                </div>
            </ParallaxLayer>
        </>
    )
}