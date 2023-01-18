<<<<<<< HEAD
import './DetailPage.css';
=======
import '../detailpage/DetailPage.css';
>>>>>>> 4f45792d85c15bb52c509454f8581258f9daffc1
import DetailPageData from './DetailPageData';
import DetailPageFunc from './DetailPageFunc';

function DetailPageApp() {
    const DetailPageArea = DetailPageData.map((product) => {
        return (
            <DetailPageFunc 
                productImage={product.productImage}
                name={product.name}
                price={product.price}
                check={product.check}
                add={product.add}
                buy={product.buy}
            />
        )
    })
    return (
        <div className='detail-page-big-zone'>
            {DetailPageArea}
        </div>
    )
}
export default DetailPageApp