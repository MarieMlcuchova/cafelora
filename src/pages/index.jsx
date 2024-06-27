import { render } from '@czechitas/render';
import '../global.css';
import '../components/banner.css';
import '../components/contact.css';
import '../components/footer.css';
import '../components/gallery.css';
import '../components/header.css';
import '../components/menu.css';
import { Banner } from '../components/banner';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import { Gallery } from '../components/gallery';
import { Header } from '../components/header';
import { Menu } from '../components/menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);
