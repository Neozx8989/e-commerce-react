import '../cart/Cart.css'
import CartData from './CartData'
import CartFunc from './Cart'

export default function CartApp () {
    const CartAppArea = CartData.map((data) => {
        return (
            <CartFunc 
                productName={data.productName}
                productImage1={data.productImage1}
                productImage2={data.productImage2}
                price={data.price}
                shoppingBtn={data.shoppingBtn}
                updateBtn={data.updateBtn}
                clearBtn={data.clearBtn}
                checkoutBtn={data.checkoutBtn}
            />
        )
    })

    return (
        <div className='cart-area'>
            {CartAppArea}
        </div>
    )
}