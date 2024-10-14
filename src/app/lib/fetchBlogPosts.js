"use server"

import config from "@/app/config";

async function fetchBlogPosts() {
    const res = await fetch('https://blog-websites.bchat.lat/api/articles?populate=*', {
        headers: {
            'Authorization': `Bearer ${config.stripe_api_key}`,
        },
        next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
        throw new Error(`Erro ao buscar posts do blog: ${res.statusText}`);
    }
  
    const data = await res.json();
    return data; // Retornando o objeto completo, não apenas data.data
}

export default fetchBlogPosts;
