import './CartWidget.css';
import cart from './assets/cart.svg';

const CartWidget = () => {
    return (
        <div className='cart'>
        <img src={cart} href="#" alt="cart"/>
        <input value={1}></input>
        </div>
    )
    
}

export default CartWidget