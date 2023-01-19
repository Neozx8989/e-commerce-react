import "./DetailPage.css";
import DetailPageData from "./DetailPageData";
import DetailPageFunc from "./DetailPageFunc";

function DetailPageApp() {
  const DetailPageArea = DetailPageData.map((product) => {
    return (
      <DetailPageFunc
        productImage={product.productImage}
        productImage2={product.productImage2}
        name={product.name}
        price={product.price}
        check={product.check}
        add={product.add}
        buy={product.buy}
        heart={product.heart}
        facebookicon={product.facebookicon}
      />
    );
  });
  return <div className="detail-page-big-zone">{DetailPageArea}</div>;
}
export default DetailPageApp;
