"use server";

async function deletePostByDocumentId(documentId) {
    console.log("Deletando post com ID:", documentId);

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

    // Segunda requisição: deletar o post do blog usando o token
    const deleteResponse = await fetch(
        `https://blog-websites.bchat.lat/content-manager/collection-types/api::article.article/${documentId}?locale=*`,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            next: { revalidate: 3600 },
        }
    );

    if (!deleteResponse.ok) {
        throw new Error(`Erro ao deletar post: ${deleteResponse.statusText}`);
    }

    // Retorna uma confirmação ou dados, se necessário
    return await deleteResponse.json();
}

export default deletePostByDocumentId;
