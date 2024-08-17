import { CardApi } from "../../assets/Api/Card"
import CompanyCard from "../CompanyCard/CompanyCard"

const HeroSection = () => {
  return (
    <>
      <div className=" 2xl:container shadow-lg mx-auto bg-[#F4F4F4]">
        <div className=" lg:w-[85%] mx-auto w-[90%]">
          <div className=" flex flex-col items-center justify-center py-10">
            <div className=" relative">
              <h1 className=" text-[#FF3D00] font-[poppions-r] text-[16px] font-bold bg-[#F4EEEC] w-fit py-2 px-7  border-2 rounded-full mb-5 ">SOLUTEK COMPANY</h1>
              <div className=" absolute top-4 -left-5 h-[7px] w-8 rounded-full bg-[#FF3D00]">

              </div>
            </div>
            <h1 className=" font-[poppions-b] text-[42px] font-black text-center text-wrap">How Professional IT Services <br />
            Can Drive <span className=" text-[#FF3C00]"> Success.</span></h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
              CardApi.map((e,index)=>{
                return(
                  <>
                  <div key={index}>
                    <CompanyCard courseicon={e.courseicon} 
                    course={e.course}
                    courseds={e.courseds}
                    />
                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection