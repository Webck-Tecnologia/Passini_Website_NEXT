import Blog2 from "./Blog2";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import Category from "./Category";
import RecentPost from "./RecentPost";
import BannerPost from "./BannerPost";
import fetchBlogPosts from "@/app/lib/fetchBlogPosts";
import fetchCategories from "@/app/lib/fetchCategories";

const POSTS_PER_PAGE = 6;

export default async function BlogContent() {
  const [postsResponse, categoriesResponse] = await Promise.all([
    fetchBlogPosts(),
    fetchCategories()
  ]);

  const blogPosts = postsResponse.data || [];
  const categories = categoriesResponse || [];

  // Resto do código da função BlogContent...
}
