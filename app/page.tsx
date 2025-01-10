// コンポーネント/モジュール読み込み
import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
// 型の読み込み
import type { News } from "./_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィス移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/30",
      createdAt: "2024/09/30",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選ばれました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/30",
      createdAt: "2024/09/30",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/08/30",
      createdAt: "2024/08/30",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  const name = "世界";
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData}></NewsList>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
