import { Drink } from "./Drink";
import '../components/Drink/style.css';



export const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div className="drinks-list">
                    <div className="drink">
                        <Drink name="Espresso" img="/cups/espresso.png"/>
                        <form className="drink__controls">
                            <input type="hidden" className="order-id" value="0" />
                            <button className="order-btn">
                            Objednat
                            </button>
                        </form>
                    </div>

                    <div className="drink">
                        <Drink name="Espresso" img="/cups/espresso.png"/>
                        <form className="drink__controls">
                            <input type="hidden" className="order-id" value="1" />
                            <button className="order-btn">
                            Objednat
                            </button>
                        </form>
                    </div>

                    <div className="drink">
                        <Drink name="Espresso" img="/cups/espresso.png"/>
                        <form className="drink__controls">
                            <input type="hidden" className="order-id" value="2" />
                            <button className="order-btn">
                            Objednat
                            </button>
                        </form>
                    </div>
                </div>

                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
      </section>
    );
};