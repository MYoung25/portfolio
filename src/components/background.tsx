import { useState, useEffect, useMemo } from "react";
import GitHubButton from 'react-github-btn'
import styles from "../styles/background.module.scss";
import randomStars from "./randomStars.json";

let radiuses: {
  r: number;
  c: number;
  cy?: string;
  cx?: string;
  rotate?: string;
}[] = [];

randomStars.forEach((number) => {
  radiuses.push({
    r: number,
    c: number * 2 * Math.PI,
    rotate: (Math.random() * 270 - 100).toString() + "deg",
  });
});

export function Background({ children }: { children?: JSX.Element[] }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    const container: Window = window
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  let scrollPercent = useMemo(
    () => 1 - scrollPosition / 1000,
    [scrollPosition]
  );

  if (scrollPercent >= 1) {
    scrollPercent = 0.9999;
  }

  if (scrollPercent <= 0) {
    scrollPercent = 0;
  }

  return (
    <div>
      <div>
        <div className={styles.starry_sky}>
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
                style={{ transform: `rotate(${rotate})` }}
              />
            ))}
          </svg>
        </div>
          <div className={styles.businessCard}>
            <div className={styles.mountains} />
            <div className={styles.content}>
            <h2 className={styles.name}>
                    <span>Michael Young</span>
                    <GitHubButton href="https://github.com/MYoung25" aria-label="@MYoung25 on GitHub">@MYoung25</GitHubButton>
            </h2>
            <h3 className={styles.tagline}>
                Learner. Problem Solver. Implementor.
            </h3>
            </div>
          </div>
      </div>

      {children}
    </div>
  );
}
