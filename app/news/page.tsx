import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

export default async function Page() {
  const { contents: News } = await getNewsList();

  return <NewsList news={News}></NewsList>;
}
