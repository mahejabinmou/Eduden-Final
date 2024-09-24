import { freeWebinar } from "../../constant/dummyJson"
import FreeWebinarCard from "./FreeWebinarCard"
import UpCmnTtle from "./UpCmnTtle"

const FreeWebinar = () => {
    return (
        <div className="mt-[100px]">
            <UpCmnTtle />
            <h3 className="text-white text-[70px] font-bold font-gucina mt-6 text-center">
                Upcoming Free Webinar
            </h3>
            <div className="webNarContainer mt-[75px]">
                {freeWebinar.map((webinar) => (
                    <FreeWebinarCard key={webinar.id} {...webinar} />
                ))}
            </div>
        </div>
    )
}

export default FreeWebinar
