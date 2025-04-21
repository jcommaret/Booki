import { logo } from '../../assets/images/images'

export function Header() {
    return (
        <header>
       
        <nav className="navbar">
            <a className="logo" href="#">
                <img src={logo.src} srcSet={logo.srcSet} sizes={logo.sizes} alt={logo.alt}/>
            </a>
        
            <ul className="menu">
                <li><a href="#hebergement">Hébergements</a></li>
                <li><a href="#activites">Activités</a></li>
            </ul>
        
        </nav>

        <section className="affinity">
            <div className="site-description">
                <p>Trouvez votre Hébergement pour des vacances de rêve</p>
                <p>En plein centre ville ou en pleine nature</p>
            </div>

            <div className="search">
                <form>    
                    <i className="fas fa-map-marker-alt"></i>
                    <input className="input-field" type="text" placeholder="Marseille, France" />
                    <button type="submit" className="submit-bt off-desktop">
                        <i className="fa-solid fa-search"></i>
                    </button>
                    <button type="submit" className="submit-bt off-mobile">
                        Rechercher
                    </button>
                    
                </form>
            </div>
            
            <div className="filters">
                <h3>Filtres</h3>
                <ul>
                    <li><i className="fa-solid fa-money-bill-wave"></i><p>Économique</p></li>
                    <li><i className="fa-solid fa-child"></i><p>Famillial</p></li>
                    <li><i className="fa-solid fa-heart"></i><p>Romantique</p></li>
                    <li><i className="fa-solid fa-dog"></i><p>Animaux Autorisés</p></li>
                </ul>
            </div>
            
            <div className="search-results">
                <i className="fa-solid fa-info"></i>
                <p>Plus de 500 logements sont disponibles dans cette ville</p>
            </div>
        
        </section>
    </header>
    );
}
export default Header;