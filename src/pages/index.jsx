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


const response = await fetch('http://localhost:4000/api/drinks');
const drinks = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true}/>
    <main>
      <Banner />
      <Menu drinks={drinks.data}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

document.querySelector(".nav-btn").addEventListener("click", function () {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed");
})

document.querySelector(".rollout-nav").addEventListener("click", function () {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed");
})

document.querySelectorAll(".drink__controls")
  .forEach(form => form.addEventListener("submit", function (event) {
    event.preventDefault();

    fetch('http://localhost:4000/api/drinks/' + event.target.dataset.id , {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        [{ op: 'replace', path: '/ordered', value: event.target.dataset.ordered === 'false'}]
      ),
    });

    window.location.reload();
  }));
