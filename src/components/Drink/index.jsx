import { Layer } from "../Layer";
import '../Layer/style.css';

export const Drink = ({id, name, ordered, image, layers}) => {
    return (
        <div className="drink__product">
            <div className="drink__cup">
                <img src={image} />
            </div>
            <div className="drink__info">
                <h3>{name}</h3>
                <Layer color="#feeeca" label="mléčná pěna" />
            </div>
        </div>
    );                         
};