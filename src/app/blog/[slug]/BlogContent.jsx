import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import fetchImagePost from '@/app/lib/fetchImagePost';

const BlogContent = ({ blog }) => {
  const [mediaImages, setMediaImages] = useState({});

  useEffect(() => {
    const fetchMediaImages = async () => {
      const mediaBlocks = blog.blocks.filter(block => block.__component === 'shared.media');
      const imagePromises = mediaBlocks.map(block => fetchImagePost(block.id));
      const images = await Promise.all(imagePromises);
      const imageMap = {};
      mediaBlocks.forEach((block, index) => {
        imageMap[block.id] = images[index];
      });
      setMediaImages(imageMap);
    };

    fetchMediaImages();
  }, [blog.blocks]);

  const renderBlock = (block) => {
    switch (block.__component) {
      case 'shared.quote':
        return (
          <div key={block.id} className="quote-block">
            <h3>{block.title}</h3>
            <blockquote>{block.body}</blockquote>
          </div>
        );
      case 'shared.media':
        const mediaImage = mediaImages[block.id];
        if (!mediaImage) return null; // ou um placeholder/loader
        return (
          <div key={block.id} className="media-block">
            <Image
              src={`https://blog-websites.bchat.lat${mediaImage.url}`}
              alt={mediaImage.alternativeText || 'Imagem do blog'}
              width={mediaImage.width || 300}
              height={mediaImage.height || 300}
              layout="responsive"
              className='mb-4 mt-4'
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article className="blog-content">
      <h2 className='mb-4 mt-4 text-2xl font-bold'>{blog.title}</h2>
      <p className="blog-description">{blog.description}</p>
      
      {blog.blocks.map(block => renderBlock(block))}
    </article>
  );
};

export default BlogContent;
