import { OrderItem } from "../OrderItem/orderItem"

export const Order = ({ items }) => (
    <div className="container order__content">
        <h1>Vaše objedávnka</h1>
        {items.length === 0 ? (
            <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
            <div className="order__items">
                {items.map((item, index) => (
                    <OrderItem key={index} image={item.image} name={item.name} />
                ))}
            </div>
        )}
    </div>
);
