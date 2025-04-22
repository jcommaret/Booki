import Image from '../Image';

import { ArticleProps } from '../../types/articles';

const Article: React.FC<ArticleProps> = ({ image, title, description, rating, className }) => {
    // Use a type guard to ensure the image exists
    if (!image || !image.src) {
        console.error(`Image not found`);
        return null;
    }

    return (
        <a href="#">
            <article className={className}>
                <Image image={image} />
                <div className="description">
                    <h4>{title}</h4>
                    {description && <p>{description}</p>}
                    {rating && (
                        <div className="rating">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`fa fa-star ${index < parseInt(rating) ? 'checked' : ''}`}
                                ></span>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </a>
    );
};

export default Article;