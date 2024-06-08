import ShopCard from "../components/ShopCard";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import HeaderPera from "../components/HeaderPera";


const Shop = ({limit}) => {
    const [shopData, setShopData] = useState([]);
    useEffect(() => {
        fetch('shop.json')
            .then((res) => res.json())
            .then((data) => setShopData(data))
    }, []);
    return (
        <div className="w-full divItemCenter flex-col gap-12 pt-28">
            <div>
                <HeaderPera heading={'OUR SHOP'}></HeaderPera>
            </div>
            <div className="divItemCenter">
                <ShopCard shopData={shopData} limit={limit}></ShopCard>
            </div>
        </div>
    );
};
Shop.propTypes = {
    limit: PropTypes.number.isRequired
};
export default Shop;