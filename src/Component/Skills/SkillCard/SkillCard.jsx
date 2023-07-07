
const SkillCard = ({name, percent}) => {
    return (
        <div className="hover:-translate-y-3 pb-6 duration-500">
            {/* card start*/}
            <div className="relative group">
              <h4
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom-bottom"
                
                className="w-24 flex items-center text-center justify-center h-24 bg-gradient-to-l lg:text-sm text-xs from-transparent to-[#fe66015e] object-cover p-4 rounded-full aos-init aos-animate"
                
              >{name}</h4>
              <div className="absolute top-0 bg-slate-100 dark:bg-orange-600 w-24 h-full uppercase font-bold rounded-full opacity-0 duration-200 group-hover:opacity-100 scale-0 group-hover:scale-100 z-3 p-2">
              <div className="radial-progress text-white" style={{"--value":percent}}> {percent}% </div>
              </div>
            </div>
            {/* card end */}
        </div>
    );
};

export default SkillCard;