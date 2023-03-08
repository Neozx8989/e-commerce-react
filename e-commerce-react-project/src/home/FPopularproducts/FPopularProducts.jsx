import AliceCarousel from "react-alice-carousel"


function FPopularProductsFunc(props){
    return (
        <AliceCarousel autoPlay autoPlayInterval="5000">
        <div className="adversting-area">
          <div className="left-area">
            <h1>ASUS LAPTOP</h1>
            <div className="shopview">
              <button>{props.buttonshop}</button>
              <button>{props.buttonview}</button>
            </div>
          </div>
          <img
            src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_laptops_062022.jpg"
            alt="Laptop"
          />
        </div>
        <div className="adversting-area">
          <div className="left-area">
            <h1>ASUS DESKTOP</h1>
            <div className="shopview">
              <button>{props.buttonshop}</button>
              <button>{props.buttonview}</button>
            </div>
          </div>
          <img
            src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_desktops_062022.jpg"
            alt="ASUS DESKTOP"
          />
        </div>
        <div className="adversting-area">
          <div className="left-area">
            <h1>ASUS MONITOR</h1>
            <div className="shopview">
              <button>{props.buttonshop}</button>
              <button>{props.buttonview}</button>
            </div>
          </div>
          <img
            src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_CategoryImages_monitors_062022a.jpg"
            alt="ASUS MONITOR"
          />
        </div>
      </AliceCarousel> 
    )
}

export {FPopularProductsFunc}