"use server";

async function fetchBlogPostByDocumentId(documentId) {
    console.log("Fetching blog post...");

    // Primeira requisição: autenticação para obter o token
    const loginResponse = await fetch(`https://blog-websites.bchat.lat/admin/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "lucas@bolt360.com.br",
            password: "Gmais2023@@",
        }),
        next: { revalidate: 3600 },
    });

    if (!loginResponse.ok) {
        throw new Error(`Erro ao autenticar: ${loginResponse.statusText}`);
    }

    // Extraindo o token da resposta
    const loginData = await loginResponse.json();
    const token = loginData.data.token;

    // Segunda requisição: buscar o post do blog usando o token
    const blogPostResponse = await fetch(
        `https://blog-websites.bchat.lat/content-manager/collection-types/api::article.article/${documentId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            next: { revalidate: 3600 },
        }
    );

    if (!blogPostResponse.ok) {
        throw new Error(`Erro ao buscar post do blog: ${blogPostResponse.statusText}`);
    }

    // Extraindo dados do post
    const blogPostData = await blogPostResponse.json();
    const currentBlogPost = blogPostData.data;

    if (!currentBlogPost) {
        throw new Error(`Post com documentId ${documentId} não encontrado.`);
    }
    
    
    return currentBlogPost;
}

export default fetchBlogPostByDocumentId;
