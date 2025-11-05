import BandTitle from "../components/BandTitle";

function BandSection() {
	return (
	<section className="band-section">
			<div className="h-full flex lg:flex-row flex-col items-center relative">
				<div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt:0">
				<BandTitle/>
				</div>
				<div className="h-full">
                </div>
			</div>
		</section>
	);
}

export default BandSection;
