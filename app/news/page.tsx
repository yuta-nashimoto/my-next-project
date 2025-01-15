import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "../_components/Pagination";
import SearchFiled from "../_components/SearchFileld";

export const revalidate = 60;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchFiled />
      <NewsList news={news}></NewsList>
      <Pagination totalCount={totalCount}></Pagination>
    </>
  );
}
