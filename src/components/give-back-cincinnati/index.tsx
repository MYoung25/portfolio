import { ParallaxLayer } from "@react-spring/parallax"
import { Outline } from './outline'
import styles from '../../styles/givebackcincinnati.module.scss'

export function GiveBackCincinnati () {
    return (
        <>
            <ParallaxLayer offset={3} speed={3}>
                <Outline>
                    <div>Hello World</div>
                </Outline>
            </ParallaxLayer>
        </>
    )
}