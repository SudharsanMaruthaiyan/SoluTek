import { Plus } from "lucide-react"

const CompanyCard = (props, index) => {
  return (
    <>
    <div className="mb-10 z-10 group rounded-2xl bg-white" id="cardbg">
      <div key={index} className="rounded-2xl text-start px-6 py-10  z-0" id="bg">
        <div>
          <img className=" group-hover:fill-white bg-red-50 z-10" src={props.courseicon} alt="" />
        </div>
        <h2 className=" font-[poppions-r] font-bold text-[24px] pt-9 pb-5 group-hover:text-white">{props.course}</h2>
        <p className=" font-[firesans-r] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white">{props.courseds}</p>
        <div className=" flex gap-3 items-center pt-10 group-hover:text-white">
          <Plus className=" bg-[#b3b2b264] rounded-full stroke-[#FF3C00] h-7 w-7 font-[firesans-sb] p-1 group-hover:stroke-[#ffffff]"/>
          <p className=" text-[15px] font-bold font-[openSans-b] group-hover:text-white">READ MORE</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default CompanyCard