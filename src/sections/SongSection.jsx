import { useGSAP } from "@gsap/react";
import SongCard from "../components/SongCard";
import SongTitle from "../components/SongTitle";

function SongSection() {
	return (
		<section className="song-section">
			<div className="h-full flex lg:flex-row flex-col items-center">
				<div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt:0">
					<SongTitle />
					<SongCard />
				</div>
			</div>
		</section>
	);
}

export default SongSection;
