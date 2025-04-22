// * Hébergements
import { hebergements1, hebergements2, hebergements3, hebergements4, hebergements5, hebergements6 } from './assets/images/images';
// * Activités
import { activites1, activites2, activites3, activites4, activites5, activites6 } from './assets/images/images'
// * Popular
import { popular1, popular2, popular3 } from './assets/images/images'
import content from './assets/data/content.json';

import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';

type ImageType = {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
};

type ImageMapType = {
  [key: string]: ImageType;
};

type ContentItem = {
  image: string;
  title: string;
  description?: string;
  rating?: string;
};

type ContentSection = {
  section: string;
  items: ContentItem[];
};

function App() {
  const imageMap: ImageMapType = {
    hebergement1: hebergements1,
    hebergement2: hebergements2,
    hebergement3: hebergements3,
    hebergement4: hebergements4,
    hebergement5: hebergements5,
    hebergement6: hebergements6,
    popular1: popular1,
    popular2: popular2,
    popular3: popular3,
    activites1: activites1,
    activites2: activites2,
    activites3: activites3,
    activites4: activites4,
    activites5: activites5,
    activites6: activites6,
  };

  const typedContent = content as ContentSection[];

  console.log('Hébergements items:', typedContent[0].items);
  console.log('Premier hébergement:', typedContent[0].items[0]);
  console.log('Image du premier hébergement:', imageMap[typedContent[0].items[0].image]);

  return (
    <div className="wrapper">
        <Header />
        <main>   
            <div className="row">
                <div id="hebergement" className="hebergement box">
                    <h2>{typedContent[0].section}</h2>    
                    <div className="hosting">        
                        {typedContent[0].items.slice(0, 3).map((item, index) => (
                            <Article 
                                key={index}
                                image={imageMap[item.image]}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    <div className="hosting">    
                        {typedContent[0].items.slice(3, 6).map((item, index) => (
                            <Article 
                                key={index}
                                image={imageMap[item.image]}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    <div className="see-more">
                        Afficher plus
                    </div>
                </div>
                    
                <div className="popular box">
                    <h2>{typedContent[1].section} <i className="fa fa-star checked"></i></h2> 
                    <div className="cards">
                        {typedContent[1].items.map((item, index) => (
                            <Article 
                                key={index}
                                image={imageMap[item.image]}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div id="activites" className="activity">
                <h2>{typedContent[2].section}</h2>
                <div className="activity">
                    <div className="big">
                        <Article 
                            image={imageMap[typedContent[2].items[0].image]}
                            title={typedContent[2].items[0].title}
                            className="one"
                        />
                    </div>
            
                    <div className="column">
                        <Article 
                            image={imageMap[typedContent[2].items[1].image]}
                            title={typedContent[2].items[1].title}
                            className="two"
                        />
                        <Article 
                            image={imageMap[typedContent[2].items[2].image]}
                            title={typedContent[2].items[2].title}
                            className="three"
                        />
                    </div>
                
                    <div className="big">
                        <Article 
                            image={imageMap[typedContent[2].items[3].image]}
                            title={typedContent[2].items[3].title}
                            className="four"
                        />
                    </div>
                    
                    <div className="column">
                        <Article 
                            image={imageMap[typedContent[2].items[4].image]}
                            title={typedContent[2].items[4].title}
                            className="five"
                        />
                        <Article 
                            image={imageMap[typedContent[2].items[5].image]}
                            title={typedContent[2].items[5].title}
                            className="six"
                        />
                    </div>
                </div>
            </div>
        </main>
        
        <Footer />
    </div>
  )
}

export default App
