import "./index.scss";

export function Footer() {
    return (
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
    );
}
export default Footer;