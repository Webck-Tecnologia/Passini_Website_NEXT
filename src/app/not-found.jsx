import Link from 'next/link';
import RootLayout from './RootLayout';
import Header3 from './_components/Header/Header';
import Inferior from './_components/Footer/page';
import styles from './NotFound.module.css'; // Importando um módulo CSS

export default function NotFound() {
  return (
    <RootLayout>
      <div className={styles.wrapper}>
        <Header3 />
        <div className={styles.content}>
          <div className="container text-center">
            <h1 className={styles.mainTitle}>404</h1>
            <h2>Oops! Página não encontrada</h2>
            <p>Desculpe, a página que você está procurando não existe ou foi movida.</p>
            <div className={styles.btnGroup}>
              <Link href="/" className="btn-twentyOne fw-500 tran3s me-3">
                Voltar para a página inicial
              </Link>
              <Link href="/servico" className="btn-twentyOne fw-500 tran3s">
                Explorar nossos serviços
              </Link>
            </div>
          </div>
        </div>
        <Inferior />
      </div>
    </RootLayout>
  );
}
