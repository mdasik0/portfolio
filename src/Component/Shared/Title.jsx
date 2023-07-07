

const Title = ({titleName}) => {
    return (
        <div>
            <div className="relative w-fit">
                <h3 className="lg:text-7xl text-4xl font-extrabold text-slate-700 spaceing">{titleName}</h3>
                <p className="text-3xl absolute spaceing lg:left-4 left-2 -top-2 font-bold">{titleName}</p>
            </div>
        </div>
    );
};

export default Title;