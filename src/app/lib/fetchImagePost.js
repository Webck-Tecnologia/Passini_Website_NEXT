"use server"

import config from "@/app/config";

async function fetchImagePost(id) {
    if (!id) {
        console.warn("ID da imagem não fornecido");
        return null;
    }

    try {
        const res = await fetch(`https://blog-websites.bchat.lat/api/upload/files/${id}`, {
            headers: {
                'Authorization': `Bearer ${config.stripe_api_key}`,
            },
            next: { revalidate: 3600 }
        });
    
        if (!res.ok) {
            if (res.status === 404) {
                console.warn(`Imagem não encontrada para o ID: ${id}`);
                return null;
            }
            throw new Error(`Erro ao buscar imagens do blog: ${res.statusText} com id: ${id}`);
        }
  
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar imagem:", error);
        return null;
    }
}

export default fetchImagePost;
