

const Title = ({titleName}) => {
    return (
        <div>
            <div  className="relative w-fit cursor-pointer">
                <h3 data-aos="fade-right" data-aos-duration="1000" className="lg:text-7xl text-4xl font-extrabold text-slate-700 spaceing">{titleName}</h3>
                <p data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300" className="text-3xl absolute hover:scale-110 duration-500 spaceing lg:left-4 left-2 -top-2 font-bold">{titleName}</p>
            </div>
        </div>
    );
};

export default Title;