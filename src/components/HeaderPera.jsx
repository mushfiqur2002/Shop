import PropTypes from 'prop-types';

const HeaderPera = ({ heading }) => {
    return (
        <div className="divItemCenter w-full flex flex-col gap-4">
            <h1 className="text-[40px] text-[#440001] uppercase border-[#FCDABF] border-y-4 py-3 px-16 font-bold lora-font">{heading}</h1>
        </div>
    );
};

HeaderPera.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default HeaderPera;
