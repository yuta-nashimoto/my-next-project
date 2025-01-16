"use client";

import Image from "next/image";
import styles from "./index.module.css";
// News型を読み込む
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";

type Props = {
  news: News[];
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

export default function NewsList({ news }: Props) {
  // 記事が0件だったら「記事がありません」表示にする
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  useLayoutEffect(() => {
    gsap.set(".fadeIn", {
      opacity: initialStyle.alpha,
      y: initialStyle.y,
    });
    gsap.to(".fadeIn", {
      opacity: afterStyle.alpha,
      y: afterStyle.y,
      ease: "power3.out",
      stagger: {
        each: 0.05,
      },
    });
  }, []);
  // 記事が1件以上だったらリストを表示する
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={`${styles.list} fadeIn`}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                src="/no-image.png"
                alt="No Image"
                className={styles.image}
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
