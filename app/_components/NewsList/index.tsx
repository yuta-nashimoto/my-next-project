import Image from "next/image";
import styles from "./index.module.css";
// News型を読み込む
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import Link from "next/link";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  // 記事が0件だったら「記事がありません」表示にする
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  // 記事が1件以上だったらリストを表示する
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="no-image"
              width={1200}
              height={630}
            />
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
