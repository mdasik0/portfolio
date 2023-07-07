import Title from "../Shared/Title";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:h-screen h-full mx-4 lg:max-w-[1300px] lg:mx-auto pt-8 "
    >
      <div className="lg:my-6 my-3">
        <Title titleName="Skills"></Title>
      </div>
      <div className="flex gap-4 lg:flex-row flex-col items-center justify-center">
      <div className="lg:w-1/2  w-full" >
          <img className="rounded" src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=900&t=st=1688657788~exp=1688658388~hmac=67f85d6ccba32b891cd7282c24256c3d6f986fbe22cbf13f544560ba5a020164" alt="" />
        </div>
        <div className="lg:w-1/2 py-3 w-full ">
          <div className="border-l-4 pl-3 lg:mb-10 mb-3 border-[#fe6601]">
            <p className="text-slate-500 mb-2">Web devlopment related</p>
            <h3 className="text-3xl font-bold">Technical Skills</h3>
          </div>

          {/* skills section (web devlopment) */}
          <div className="grid lg:grid-cols-3 grid-cols-2 py-6 gap-4">
            
            <SkillCard name='React' percent={90}></SkillCard>
            <SkillCard name='Tailwind css' percent={98}></SkillCard>
            <SkillCard name='Bootstrap css' percent={98}></SkillCard>
            <SkillCard name='MongoDB' percent={80}></SkillCard>
            <SkillCard name='Firebase' percent={60}></SkillCard>
            <SkillCard name='Javascript' percent={70}></SkillCard>
            <SkillCard name='Node js' percent={30}></SkillCard>
            <SkillCard name='Express js' percent={30}></SkillCard>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
