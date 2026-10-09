import Image from '../Image'

import { type ArticleProps } from '../../types/articles'

const Article: React.FC<ArticleProps> = ({ image, title, description, rating, className }) => {
  // Use a type guard to ensure the image exists
  if (!image || !image.src) {
    console.error(`Image not found`)
    return null
  }

  // ⚠️ Le <a> enveloppant fait partie de la mise en page : Main/index.scss cible
  // `a { display: block; flex: 1; height: … }` et `.hosting a article`. Le retirer
  // casse la grille des cartes. Lien factice tant que les pages de détail n'existent pas.
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid -- lien de maquette, voir ci-dessus
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
  )
}

export default Article
