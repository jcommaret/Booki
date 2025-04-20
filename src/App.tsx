// * Hébergements
import { hebergements1, hebergements2, hebergements3, hebergements4, hebergements5, hebergements6 } from './assets/images/images'
// * Activités
import { activites1, activites2, activites3, activites4, activites5, activites6 } from './assets/images/images'
// * Popular
import { popular1, popular2, popular3 } from './assets/images/images'

import Header from './components/header';


function App() {
  return (
    <div className="wrapper">
        <Header />
        <main>   
            <div className="row">
                <div id="hebergement" className="hebergement box">
                    <h2>Hébergements à Marseille</h2>    
                    <div className="hosting">        
                        <a href="#">
                            <article>
                            <img src={hebergements1.src} srcSet={hebergements1.srcSet} sizes={hebergements1.sizes} alt={hebergements1.alt}/>
                                <div className="description">
                                    <h4>Auberge La Cannebière</h4>
                                    <p>Nuit à partir de 25€</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                        </a>
                        
                        <a href="#">
                            <article>
                                <img src={hebergements2.src} 
                                    srcSet={hebergements2.srcSet} 
                                    sizes={hebergements2.sizes} 
                                    alt={hebergements2.alt}></img>
                                <div className="description">
                                    <h4>Hôtel du port</h4>
                                    <p>Nuit à partir de 52€</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                        </a>
                        
                        <a href="#">
                            <article>
                                <img src={hebergements3.src} 
                                    srcSet={hebergements3.srcSet} 
                                    sizes={hebergements3.sizes} 
                                    alt={hebergements3.alt}></img>
                                <div className="description">
                                    <h4>Hôtel Les mouettes</h4>
                                    <p>Nuit à partir de 76€</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    </div>
                    <div className="hosting">
                        <a href="#">
                            <article>
                                <img src={hebergements4.src} 
                                    srcSet={hebergements4.srcSet} 
                                    sizes={hebergements4.sizes} 
                                    alt={hebergements4.alt}></img>          
                                <div className="description">
                                    <h4>Hôtel de la mer</h4>
                                    <p>Nuit à partir de 25€</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                        </a>

                        <a href="#">
                            <article>
                                <img src={hebergements5.src} 
                                    srcSet={hebergements5.srcSet} 
                                    sizes={hebergements5.sizes} 
                                    alt={hebergements5.alt}></img>
                                                                            
                                <div className="description">    
                                    <h4>Auberge Le Panier</h4>
                                    <p>Nuit à partir de 25€</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article>
                        </a>
                        <a href="#">
                            <article>
                                <img src={hebergements6.src} 
                                    srcSet={hebergements6.srcSet} 
                                    sizes={hebergements6.sizes} 
                                    alt={hebergements6.alt}></img>
                                <div className="description">
                                    <h4>Hôtel chez Amina</h4>
                                    <p>Nuit à partir de 25€</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    </div>

                    <div className="see-more">
                        Afficher plus
                    </div>
                
                </div>
                    
                <div className="popular box">
                    <h2>Les plus populaires <i className="fa fa-star checked"></i></h2> 
                    <div className="cards">
                        <a href="#">
                            <article>
                                <img src={popular1.src} 
                                    srcSet={popular1.srcSet} 
                                    sizes={popular1.sizes} 
                                    alt={popular1.alt}></img>       
                                <div className="description">
                                    <div className="text"> 
                                        <h4>Hôtel le soleil du matin</h4>
                                        <p>Nuit à partir de 128€</p>
                                    </div>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                </div>
                            </article>    
                        </a>
                        <a href="#">
                            <article>
                                <img src={popular2.src} 
                                    srcSet={popular2.srcSet} 
                                    sizes={popular2.sizes} 
                                    alt={popular2.alt}></img>
                                <div className="description">
                                    <div className="text">
                                        <h4>Au coeur de l'eau chambre d'hôtes</h4>
                                        <p>Nuit à partir de 71€</p>
                                    </div>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </article> 
                        </a>
                        <a href="#">
                            <article>
                                <img src={popular3.src} 
                                    srcSet={popular3.srcSet} 
                                    sizes={popular3.sizes} 
                                    alt={popular3.alt}></img>
                                <div className="description">
                                    <div className="text">
                                        <h4>Hôtel Tout bleu et Blanc</h4>
                                        <p>Nuit à partir de 68€</p>
                                    </div>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>    
                                </div>
                            </article>
                        </a>
                    </div>
                </div>
            </div>

            <div id="activites" className="activity">
                <h2>Activités à Marseille</h2>
                <div className="act">
                    <div className="big">
                        <article className="one">
                            <img src={activites1.src} 
                                srcSet={activites1.srcSet} 
                                sizes={activites1.sizes} 
                                alt={activites1.alt}></img>
                            <h4>Vieux Port</h4>
                        </article>
                    </div>
            
                    <div className="column">
                        <article className="two">
                            <img src={activites2.src} 
                                srcSet={activites2.srcSet} 
                                sizes={activites2.sizes} 
                                alt={activites2.alt}></img>
                            <h4>Fort de Pomègues</h4>
                        </article>
                        <article className="three">
                            <img src={activites3.src} 
                                srcSet={activites3.srcSet} 
                                sizes={activites3.sizes} 
                                alt={activites3.alt}></img>
                            <h4>Îles du Frioul</h4>
                        </article>
                    </div>
                
                    <div className="big">
                        <article className="four">
                            <img src={activites4.src} 
                                srcSet={activites4.srcSet} 
                                sizes={activites4.sizes} 
                                alt={activites4.alt}></img>
                            <h4>Parc Nationnal des calanques</h4>
                        </article>
                    </div>
                    
                    <div className="column">
                        <article className="five">
                            <img  
                                srcSet={activites5.srcSet} 
                                sizes={activites5.sizes} 
                                alt={activites5.alt}></img>
                            <h4>Notre-Dame-De-La-Garde</h4>
                        </article>

                        <article className="six">
                            <img src={activites6.src} 
                                srcSet={activites6.srcSet} 
                                sizes={activites6.sizes} 
                                alt={activites6.alt}></img>
                            <h4>Parc longchamps</h4>
                        </article>
                    </div>
                </div>
            </div>
        </main>
        
        <footer className="footer">
            <div className="inner-foot">        
                <div className="column-foot">
                    <h3>A propos</h3>
                    <ul>
                        <li>Fonctionnement général du site</li>
                        <li>Conditions générales de vente</li>
                        <li>Données et confidentialité</li>
                    </ul> 
                </div>
                
                <div className="column-foot">
                    <h3>Nos Hébergements</h3>
                    <ul>
                        <li>Charte qualité</li>
                        <li>Soumettre votre hôtel</li>
                    </ul> 
                </div>

                <div className="column-foot">
                    <h3>Assistance</h3>
                    <ul>            
                        <li>Centre d'aide</li>
                        <li>Nous contacter</li>
                    </ul> 
                </div>
            </div>
        </footer>
    </div>
  )
}

export default App
