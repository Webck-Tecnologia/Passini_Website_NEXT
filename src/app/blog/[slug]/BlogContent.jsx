import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';  // Para renderizar o HTML
import DOMPurify from 'dompurify';  // Para sanitizar o HTML
import he from 'he';  // Para decodificar as entidades HTML

const BlogContent = ({ blog }) => {
  // Função para sanitizar e decodificar HTML
  const cleanAndDecodeHTML = (htmlContent) => {
    // Decodifica as entidades HTML duas vezes
    const doubleDecodedContent = he.decode(he.decode(htmlContent));  
    return DOMPurify.sanitize(doubleDecodedContent);  // Sanitiza o HTML decodificado
  };

  return (
    <article className="blog-content">
      <h2 className='mb-4 mt-4 text-2xl font-bold'>{blog.title}</h2>

      {/* Decodifica e sanitiza a descrição antes de renderizar */}
      <div className="blog-description">
        {parse(cleanAndDecodeHTML(blog.description))}  
      </div>

      {blog.blocks && blog.blocks.map((block) => {
        switch (block.__component) {
          case 'shared.quote':
            return (
              <div key={block.id} className="quote-block">
                <h3>{block.title}</h3>
                <blockquote>{parse(cleanAndDecodeHTML(block.body))}</blockquote>
              </div>
            );
          case 'shared.media':
            if (block.file && block.file.data) {
              const mediaFile = block.file.data.attributes;
              return (
                <div key={block.id} className="media-block">
                  <Image
                    src={`https://blog-websites.bchat.lat${mediaFile.url}`}
                    alt={mediaFile.alternativeText || 'Imagem do blog'}
                    width={mediaFile.width || 300}
                    height={mediaFile.height || 300}
                    layout="responsive"
                    className='mb-4 mt-4'
                  />
                </div>
              );
            }
            return null;
          case 'shared.rich-text':
            return (
              <div key={block.id} className="rich-text-block">
                {parse(cleanAndDecodeHTML(block.body))}  {/* Decodifica e sanitiza o HTML */}
              </div>
            );
          default:
            return null;
        }
      })}
    </article>
  );
};

export default BlogContent;
