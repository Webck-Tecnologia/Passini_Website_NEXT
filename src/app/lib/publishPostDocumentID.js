"use server";

async function publishBlogPostByDocumentId(documentId) {
    console.log("Publicando blog post...");

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
    console.log("Tentando publicar post com ID:", documentId);

    // Segunda requisição: publicar o post do blog usando o token
    const publishResponse = await fetch(
        `https://blog-websites.bchat.lat/content-manager/collection-types/api::article.article/${documentId}/actions/publish`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            next: { revalidate: 3600 },
        }
    );

    if (!publishResponse.ok) {
        throw new Error(`Erro ao publicar post: ${publishResponse}`);
    }

    // Extraindo dados do post publicado
    const publishedPostData = await publishResponse.json();
    return publishedPostData.data;
}

export default publishBlogPostByDocumentId;
