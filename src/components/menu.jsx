import { Drink } from "./Drink";
import '../components/Drink/style.css';

export const Menu = ({drinks}) => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div className="drinks-list">  
                    {drinks.map((drink) => (
                        <div className="drink">
                            <Drink name={drink.name} image={drink.image} layers={drink.layers}/>
                        </div>
                    ))}
                   
                </div>


                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
      </section>
    );
};