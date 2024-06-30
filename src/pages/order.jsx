import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Order } from '../components/Order/order';

const order = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
const finalOrder = await order.json();

document.querySelector('#root').innerHTML = render(
	<div className="page">
		<Header showMenu={false}/>
		<main className="order">
			<Order items={finalOrder.data}/>
		</main>
		<Footer />
	</div>
);
