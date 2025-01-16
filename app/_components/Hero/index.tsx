"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import gsap from "gsap";

type Props = {
  title: string;
  sub: string;
};

const initialStyle = {
  alpha: 0,
  y: 80,
};
const afterStyle = {
  alpha: 1,
  y: 0,
  duration: 0.8,
};

export default function Hero({ title, sub }: Props) {
  useEffect(() => {
    gsap.set(".fadeIn", {
      opacity: initialStyle.alpha,
      y: initialStyle.y,
    });
    gsap.to(".fadeIn", {
      opacity: afterStyle.alpha,
      y: afterStyle.y,
      ease: "power3.out",
      duration: afterStyle.duration,
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className="fadeIn">
        <h1 className={`${styles.title}`}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
