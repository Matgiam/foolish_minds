import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BandSection from "./sections/BandSection";
import VideoSection from "./sections/VideoSection";
import ShowSection from "./sections/ShowSection";
import SongSection from "./sections/SongSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 3,
			effects: true,
		});
	});
	return (
		<main>
			{/* <Navbar /> */}
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<HeroSection />
					<MessageSection />
					<SongSection />
					<BandSection />
					<VideoSection />
					<ShowSection />
					<FooterSection />
					{/* <div className="h-dvh"></div> */}
				</div>
			</div>
		</main>
	);
}

export default App;
