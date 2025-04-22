// Types pour les images
export type ImageType = {
    src: string;
    srcSet: string;
    sizes: string;
    alt: string;
};

export type ImageMapType = {
    [key: string]: ImageType;
};

// Types pour les composants
export interface ImageProps {
    image: ImageType;
}

export interface ArticleProps {
    image: ImageType;
    title: string;
    description?: string;
    rating?: string;
    className?: string;
}

// Types pour le contenu
export type ContentItem = {
    image: string;
    title: string;
    description?: string;
    rating?: string;
};

export type ContentSection = {
    section: string;
    items: ContentItem[];
};
