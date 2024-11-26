import { freeWebinar } from "../../constant/dummyJson";
import FreeWebinarCard from "./FreeWebinarCard";
import UpCmnTtle from "./UpCmnTtle";

const FreeWebinar = () => {
	return (
		<div className="mt-[60px] md:mt-[100px] sectionGap">
			<UpCmnTtle />
			<h3 className="popularCategoryHead text-white font-gucina mt-[20px] text-center">
				Upcoming Free Webinar
			</h3>
			<div className="webNarContainer mt-[35px] md:mt-[75px]">
				{freeWebinar.map((webinar) => (
					<FreeWebinarCard key={webinar.id} {...webinar} />
				))}
			</div>
		</div>
	);
};

export default FreeWebinar;
