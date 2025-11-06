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
					<BandSection />
					<VideoSection />
					<ShowSection />
					<div className="h-dvh"></div>
				</div>
			</div>
		</main>
	);
}

export default App;
