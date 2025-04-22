import { ImageType, ImageMapType } from '../../types/articles';

/* logo */
import BookiLogo from './logo/Booki.png';
import BookiLogo3x from './logo/Booki@3x.png';

/* hébergements */
import hebergement1 from './hebergements/3_medium/marcus-loke-WQJvWU_HZFo-unsplash.jpg';
import hebergement2 from './hebergements/3_medium/fred-kleber-gTbaxaVLvsg-unsplash.jpg';
import hebergement3 from './hebergements/3_medium/reisetopia-B8WIgxA_PFU-unsplash.jpg';
import hebergement4 from './hebergements/3_medium/annie-spratt-Eg1qcIitAuA-unsplash.jpg';
import hebergement5 from './hebergements/3_medium/nicate-lee-kT-ZyaiwBe0-unsplash.jpg';
import hebergement6 from './hebergements/3_medium/febrian-zakaria-M6S1WvfW68A-unsplash.jpg';

/* activités */
import activite1 from './activites/3_medium/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg';
import activite2 from './activites/3_medium/paul-hermann-QFTrLdQIRhI-unsplash.jpg';
import activite3 from './activites/3_medium/kevin-hikari-rV_Qd1l-VXg-unsplash.jpg';
import activite4 from './activites/3_medium/kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg';
import activite5 from './activites/3_medium/florian-wehde-xW9e8gdotxI-unsplash.jpg';
import activite6 from './activites/3_medium/lena-paulin-wH2-EJoDcV0-unsplash.jpg';

/* popular */
import popularImg1 from './hebergements/3_medium/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg';
import popularImg2 from './hebergements/3_medium/aw-creative-VGs8z60yT2c-unsplash.jpg';
import popularImg3 from './hebergements/3_medium/febrian-zakaria-sjvU0THccQA-unsplash.jpg';


const logo = {
  src: BookiLogo,
  srcSet: `${BookiLogo} 300w, ${BookiLogo3x} 900w`,
  sizes: '100vw',
  alt: 'Logo Booki'
};

const hebergements1: ImageType = {
    src: hebergement1,
    srcSet: `${hebergement1} 300w, ${hebergement1} 1000w, ${hebergement1} 2000w, ${hebergement1} 4000w`,
    sizes: '100vw',
    alt: 'Hébergement 1'
};

const hebergements2: ImageType = {
  src: hebergement2,
  srcSet: `${hebergement2} 300w, ${hebergement2} 1000w, ${hebergement2} 2000w, ${hebergement2} 4000w`,
  sizes: '100vw',
  alt: 'Hébergement 2'
};

const hebergements3: ImageType = {
  src: hebergement3,
  srcSet: `${hebergement3} 300w, ${hebergement3} 1000w, ${hebergement3} 2000w, ${hebergement3} 4000w`,
  sizes: '100vw',
  alt: 'Hébergement 3'
};

const hebergements4: ImageType = {
  src: hebergement4,
  srcSet: `${hebergement4} 300w, ${hebergement4} 1000w, ${hebergement4} 2000w, ${hebergement4} 4000w`,
  sizes: '100vw',
  alt: 'Hébergement 4'
};

const hebergements5: ImageType = {
  src: hebergement5,
  srcSet: `${hebergement5} 300w, ${hebergement5} 1000w, ${hebergement5} 2000w, ${hebergement5} 4000w`,
  sizes: '100vw',
  alt: 'Hébergement 5'
};

const hebergements6: ImageType = {
  src: hebergement6,
  srcSet: `${hebergement6} 300w, ${hebergement6} 1000w, ${hebergement6} 2000w, ${hebergement6} 4000w`,
  sizes: '100vw',
  alt: 'Hébergement 6'
};

const activites1: ImageType = {
  src: activite1,
  srcSet: `${activite1} 300w, ${activite1} 1000w, ${activite1} 2000w, ${activite1} 4000w`,
  sizes: '100vw',
  alt: 'Activité 1'
};

const activites2: ImageType = {
  src: activite2,
  srcSet: `${activite2} 300w, ${activite2} 1000w, ${activite2} 2000w, ${activite2} 4000w`,
  sizes: '100vw',
  alt: 'Activité 2'
};

const activites3: ImageType = {
  src: activite3,
  srcSet: `${activite3} 300w, ${activite3} 1000w, ${activite3} 2000w, ${activite3} 4000w`,
  sizes: '100vw',
  alt: 'Activité 3'
};

const activites4: ImageType = {
  src: activite4,
  srcSet: `${activite4} 300w, ${activite4} 1000w, ${activite4} 2000w, ${activite4} 4000w`,
  sizes: '100vw',
  alt: 'Activité 4'
};

const activites5: ImageType = {
  src: activite5,
  srcSet: `${activite5} 300w, ${activite5} 1000w, ${activite5} 2000w, ${activite5} 4000w`,
  sizes: '100vw',
  alt: 'Activité 5'
};

const activites6: ImageType = {
  src: activite6,
  srcSet: `${activite6} 300w, ${activite6} 1000w, ${activite6} 2000w, ${activite6} 4000w`,
  sizes: '100vw',
  alt: 'Activité 6'
};

const popular1: ImageType = {
  src: popularImg1,
  srcSet: `${popularImg1} 300w, ${popularImg1} 1000w, ${popularImg1} 2000w, ${popularImg1} 4000w`,
  sizes: '100vw',
  alt: 'Popular 1'
};

const popular2: ImageType = {
  src: popularImg2,
  srcSet: `${popularImg2} 300w, ${popularImg2} 1000w, ${popularImg2} 2000w, ${popularImg2} 4000w`,
  sizes: '100vw',
  alt: 'Popular 2'
};

const popular3: ImageType = {
  src: popularImg3,
  srcSet: `${popularImg3} 300w, ${popularImg3} 1000w, ${popularImg3} 2000w, ${popularImg3} 4000w`,
  sizes: '100vw',
  alt: 'Popular 3'
};

// Image Map
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

export { 
  logo, 
  hebergements1, hebergements2, hebergements3, hebergements4, hebergements5, hebergements6,
  activites1, activites2, activites3, activites4, activites5, activites6,
  popular1, popular2, popular3,
  imageMap
};
