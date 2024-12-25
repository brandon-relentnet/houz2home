'use client';

import PhotoAlbum from 'react-photo-album';
import Image from 'next/image';
import portfolioPhotos from '@/utils/portfolioData'; // adjust import path as needed

/**
 * A custom render function that uses next/image
 * for each photo, preserving layout details from react-photo-album.
 */
const NextImage = ({ photo, imageProps, wrapperStyle }) => {
  return (
    <div
      style={{ 
        ...wrapperStyle, 
        position: 'relative', 
        width: '100%', 
        height: 'auto' 
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        // Spread in any extra props for styling or placeholders
        {...imageProps}
      />
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-4">Our Portfolio</h1>
        <p className="max-w-2xl mb-8">
          Explore a selection of our completed projects, showcasing our commitment
          to quality craftsmanship and innovative design.
        </p>

        <PhotoAlbum
          photos={portfolioPhotos}
          layout="rows" 
          // Try: 'masonry', 'columns', or 'gallery' for other layouts
          renderPhoto={NextImage}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
