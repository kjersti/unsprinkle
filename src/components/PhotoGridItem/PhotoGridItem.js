import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrcSet = `${src.replace('.jpg', '.avif')} 1x,
                      ${src.replace('.jpg', '@2x.avif')} 2x,
                      ${src.replace('.jpg', '@3x.avif')} 3x
                    `;
  const jpgSrcSet = `${src.replace('.jpg', '.jpg')} 1x,
                    ${src.replace('.jpg', '@2x.jpg')} 2x,
                    ${src.replace('.jpg', '@3x.jpg')} 3x
                  `;                    
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source 
            type="image/avif"
            srcSet={avifSrcSet}
            />
          <source 
            type="image/jpg"
            srcSet={jpgSrcSet}
            />
          <Image src={src} alt={alt}/>
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;  
`;

const Tags = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;  
  overflow: hidden;
  text-align: justify;
`;

const Tag = styled.span`      
  margin-right: 8px;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);  
  min-width: fit-content;
  line-height: 2em;
`;

export default PhotoGridItem;
