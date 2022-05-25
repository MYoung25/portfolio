import { useState, MutableRefObject, useEffect, useRef } from "react";
import styles from "./background.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import randomStars from './randomStars.json'

let radiuses: { r: number; c: number, cy?: string, cx?: string, rotate?: string }[] = [];

randomStars.forEach((number) => {
  radiuses.push({
        r: number,
        c: number * 2 * Math.PI,
        rotate: (Math.random() * 80 - 10).toString() + 'deg',
    });
})

export function Background() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

  const handleScroll = () => {
    let { current } = ref;
    if (current && (current as MutableRefObject<null>).current) {
      setScrollPosition((current as MutableRefObject<null>).current as MutableRefObject);
    }
  };

  useEffect(() => {
    const container: HTMLElement | null = document.querySelector(".starry-sky");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  let scrollPercent = 1 - scrollPosition / 1000;

  if (scrollPercent >= 1) {
    scrollPercent = .9999;
  }

  if (scrollPercent <= .7) { 
      scrollPercent = .7;
  }

  return (
    <Parallax ref={ref} pages={2} className="starry-sky">
      <ParallaxLayer speed={0} factor={.9}>
          <div className={styles.one}>
            <svg viewBox="0 0 1000 1000" height="100%" width="100%">
                {radiuses.map(({ c, r, cy, cx, rotate }) => (
                        <circle
                            r={r}
                            fillOpacity="0"
                            key={r}
                            strokeDasharray={c}
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeOpacity=".7"
                            strokeDashoffset={scrollPercent * c}
                            strokeLinecap="round"
                            x={150}
                            y={50}
                            style={{ transform: `rotate(${rotate})`}}
                        />
                    )
                )}
            </svg>
          </div>
      </ParallaxLayer>

      <ParallaxLayer offset={.49} speed={.05} className={styles.content} factor={.25}>
        <h2 className={styles.name}>Michael Young</h2>
        <h3 className={styles.name}>Web Developer</h3>
      </ParallaxLayer>

      <ParallaxLayer offset={.3} speed={.05} factor={.4}>
            <div className={styles.mountains} />
      </ParallaxLayer>

    </Parallax>
  );
}
