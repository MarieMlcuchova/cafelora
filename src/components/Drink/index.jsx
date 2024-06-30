import { Layer } from "../Layer";
import '../Layer/style.css';



export const Drink = ({id, name, ordered, image, layers}) => {
    return (
        <div className="drink">
            <div className="drink__product">
                <div className="drink__cup">
                    <img src={"http://localhost:4000" + image} />
                </div>
                <div className="drink__info">
                    <h3>{name}</h3>
                    {layers.map((layer) => (
                    <Layer color={layer.color} label={layer.label} />
                    ))}
                </div>   
            </div>
            <form className="drink__controls" data-id={id} data-ordered={ordered}>
                <input type="hidden" className="order-id" value="0" />
                <button className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}>
                   {ordered === true ? "Zrušit" : "Objednat"}
                </button>
            </form>   
        </div>
    );                         
};