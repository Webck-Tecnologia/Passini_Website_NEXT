"use server";

import config from "@/app/config";

export async function fetchBlogPostsAndCategories() {
  const [postsResponse, categoriesResponse] = await Promise.all([
    fetch('https://blog-websites.bchat.lat/api/articles?populate=*', {
      headers: {
        'Authorization': `Bearer ${config.stripe_api_key}`,
      },
    }).then(res => res.json()),
    fetch('https://blog-websites.bchat.lat/api/categories?populate=*', {
      headers: {
        'Authorization': `Bearer ${config.stripe_api_key}`,
      },
    }).then(res => res.json()),
  ]);

  return {
    blogPosts: postsResponse.data || [],
    categories: categoriesResponse || [],
  };
}
