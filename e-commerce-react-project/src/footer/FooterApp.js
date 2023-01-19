import { FooterContactData, FooterBottomData, FooterTermsData } from "./Footer";
import { FooterFunc, FooterBottomFunc, FooterTermsFunc } from "./FooterFunc";
import "./Footer.css";

function FooterApp() {
  const FooterContactArea = FooterContactData.map((info) => {
    return (
      <FooterFunc
        title={info.title}
        email={info.email}
        contactinfo={info.contactinfo}
      />
    );
  });

  const FooterBottomArea = FooterBottomData.map((info) => {
    return (
      <FooterBottomFunc logoImageUrl={info.logoImageUrl} street={info.street} />
    );
  });

  const FooterTermsArea = FooterTermsData.map((info) => {
    return (
      <FooterTermsFunc
        name={info.name}
        product={info.product}
        product2={info.product2}
        product3={info.product3}
        product4={info.product4}
        product5={info.product5}
      />
    );
  });

  return (
    <div className="footer-zone">
      {FooterContactArea}
      <div className="footer-bottom-zone">
        {FooterBottomArea}
        {FooterTermsArea}
      </div>
    </div>
  );
}

export default FooterApp;
