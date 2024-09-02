import "./style.scss";
import Heading from "../common/Heading";
import { FaHome } from "react-icons/fa";
import Footer from "../Footer";
import FeaturedCards from "../featuredCards";
import LeatestProductsCards from "../LeatestProductsCards/index.jsx";
import ShopexCards from "../ShopexCards/index.jsx";
import BlueChair from "../BlueChair/index.jsx";
import TrendingCards from "../TrendingProducts/index.jsx";
function Home() {
    return (
        <>
        <div className="home-page-wrapper">
            <Heading title="Home" path="Home">
                <FaHome />
            </Heading>
            <div className="featured-products-text">Featured Products</div>
            <div className="featured-products-cards">
            <FeaturedCards />
            </div>
        </div>
        <div className="slider">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="LeatestProductsText">Leatest Products</div>
        <div className="LeatestProductsNav">
            <div>New Arrival</div>
            <div>Best Seller</div>
            <div>Featured</div>
            <div>Special Offer</div>
        </div>
        <div className="LeatestProductsCards">
         <LeatestProductsCards />
        </div>
        <div className="ShopexCardsMainText">What Shopex Offer!</div>
        <div className="ShopexCards">
            <ShopexCards />
        </div>
        <div className="BlueChair-Home">
            <BlueChair />
        </div>
        <div className="TrendingCardsMainText">
        Trending Products
        </div>
        <div className="TrendingCards">
         <TrendingCards />
        </div>
        <Footer title = {200} />
        </>
    );
}

export default Home;