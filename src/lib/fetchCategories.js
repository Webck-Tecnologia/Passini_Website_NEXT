// src/lib/fetchCategories.js
"use server"

import config from "@/config";

async function fetchCategories() {
    const res = await fetch('https://blog-websites.bchat.lat/api/categories', {
        headers: {
            'Authorization': `Bearer ${config.stripe_api_key}`,
        },
        next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
        throw new Error(`Erro ao buscar categorias: ${res.statusText}`);
    }
  
    const data = await res.json();
    return data.data;
}

export default fetchCategories;