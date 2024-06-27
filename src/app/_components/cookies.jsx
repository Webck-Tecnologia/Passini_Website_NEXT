'use client'

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setVisible(false);
      enableCookies();
    }
  }, []);

  const handleAccept = () => {
    setVisible(false);
    localStorage.setItem('cookieConsent', 'true');
    enableCookies();
  };

  const enableCookies = () => {
    // Exemplo: Adicionando Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');
  };

  return (
    visible && (
      <div className="cookie-consent">
        <p>
          Este site utiliza cookies para melhorar a experiência do usuário.
          Ao continuar a navegar, você concorda com o uso de cookies.
        </p>
        <button onClick={handleAccept}>Aceitar</button>
        <style jsx>{`
          .cookie-consent {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #f1f1f1;
            color: black;
            text-align: center;
            padding: 0.5em;
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap; /* Alinha os itens em múltiplas linhas quando necessário */
          }
          .cookie-consent p {
            margin: 0;
            padding: 0.5em;
            font-size: 14px;
          }
          .cookie-consent button {
            margin-left: 0.5em;
            background-color: #007bff;
            border: none;
            color: white;
            padding: 0.5em 1em;
            cursor: pointer;
            border-radius: 5px;
            font-size: 14px;
          }
          @media (max-width: 768px) {
            .cookie-consent {
              flex-direction: column;
              text-align: center;
            }
            .cookie-consent p {
              font-size: 12px;
              padding: 0.5em;
            }
            .cookie-consent button {
              margin-top: 0.5em;
              font-size: 12px;
            }
          }
        `}</style>
      </div>
    )
  );
};

export default CookieConsent;
