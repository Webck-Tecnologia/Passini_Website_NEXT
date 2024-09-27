import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import Header3 from "@/components/header/Header3";

const NotFound = () => {
  return (
    <>
      <Seo
        pageTitle="Página Não Encontrada - Passini Equipamentos"
        description="Desculpe, a página que você está procurando não existe. Volte para a página inicial ou use a barra de pesquisa."
      />

      {/* 
      =============================================
      Cabeçalho Padrão do Tema
      ==============================================
      */}
      <Header3 />

      {/* 
      =============================================
      Página de Erro
      ==============================================
      */}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto text-center">
              <h3>Ops! Você está no lugar errado.</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
                Não conseguiu encontrar o que procurava? Faça uma busca abaixo
                ou volte para a nossa página inicial.
              </p>
              <Link to="/" className="btn-twentyOne fw-500 tran3s">
                Voltar para a Página Inicial
              </Link>
            </div>
          </div>
        </div>
        {/* Fim do container */}
      </div>
      {/* Fim do conteúdo da página de erro */}
    </>
  );
};

export default NotFound;
