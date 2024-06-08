import PropTypes from 'prop-types';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const suffleArray = (arr) => {
    let currentIndex = arr.length , randomIndex;

    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--;
        [arr[currentIndex],arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]];
    }
    return arr;
}

const ShopCard = ({ shopData , limit }) => {
    const shuffledData = suffleArray([...shopData]);
    const displayItem = limit ? shuffledData.slice(0,limit) : shuffledData;
    return (
        <div className='w-full flex flex-wrap justify-center items-start gap-10'>
            {
                displayItem.map((item, index) => (
                    <div className="card w-80 bg-[#FCDABF] shadow-xl" key={index}>
                        <figure className="px-5 pt-10">
                            <img src={item.image} alt={item.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title capitalize">{item.name}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions">
                                <p className='text-2xl text-[#440001] divItemCenter font-bold'>{item.price}<FaBangladeshiTakaSign></FaBangladeshiTakaSign></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

ShopCard.propTypes = {
    shopData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
    limit: PropTypes.number.isRequired
};
export default ShopCard;
