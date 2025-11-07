import gsap from "gsap";

function SongTitle() {
	const textTL = gsap.timeline({
		scrollTrigger: {
			trigger: ".song-section",
			start: "top 50%",
			end: "10% 50%",
			markers: true,
		},
	});
	textTL.to(".song-text-scroll", {
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
		ease: "circ.inOut",
	});
	return (
		<div className="song-title">
			{/* <img src="public/logo/monkey.png" className="md:w-20" alt="" /> */}
			<div  className="song-text-scroll">
				<div className="bg-dark-brown pb-5 2xl:pt-2 pt-5 2xl:px-1 px-3">
					<h1 className="text-dark-brown song-title">Our latest songs</h1>
				</div>
			</div>
		</div>
	);
}

export default SongTitle;
