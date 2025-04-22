import React from 'react';
import { ImageProps } from '../../types/articles';

// Image component that takes in an image object as a prop
const Image: React.FC<ImageProps> = ({ image }) => {
    return (
        <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} alt={image.alt} />
    );
};

// Export the Image component as the default export
export default Image;