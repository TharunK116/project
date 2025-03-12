import { IMGSRC } from "../Constants/cardContent.logo";
import getYearDifference from "../../../utils/getdiff";
function ExperienceSection({info}) {
    return (
   <>
        <img
        className='item-logo'
        src={IMGSRC}
        alt="logo"
      />
        <div className="experience-info">
            <h4>{info.COMPANY}</h4>
            <p>{info.POSITION}</p>
            <p className="date-range">
                {new Date(info.START_DATE).getFullYear()} -
                {info.END_DATE ? new Date(info.END_DATE).getFullYear() : "Present"}.
                 {getYearDifference(info.START_DATE, info.END_DATE)}
            </p>
            <p>{info.DESCRIPTION}</p>


        </div>
        </>
    )
}

export default ExperienceSection;