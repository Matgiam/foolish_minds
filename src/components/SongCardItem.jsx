import { useRef, useState } from "react";

function SongCardItem(props) {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		const allAudios = document.querySelectorAll("audio");
		allAudios.forEach((audio) => {
			if (audio !== audioRef.current) {
				audio.pause();
				audio.currentTime = 0;
			}
		});
		if (audioRef.current.paused) {
			audioRef.current.play();
			setIsPlaying(true);
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};
	const handleEnded = () => {
		setIsPlaying(false);
	};

	return (
		<div className="song-card">
			<div className="cube">
				<img src={props.image} alt={`${props.title} cover`} />
			</div>

			<div className="song-content">
				<div className="flex justify-between items-center">
					<div className="flex-col text-dark-brown">
						<h2 className="second-title">{props.title}</h2>
						<p>{props.artist}</p>
					</div>
					<img
						src={isPlaying ? "/images/pause-icon.png" : "/images/play-icon.png"}
						className="md:w-14 h-16 pt-3 cursor-pointer"
						onClick={handlePlay}
					/>
				</div>
			</div>

			<audio ref={audioRef} src={props.audioSrc} onEnded={handleEnded} />
		</div>
	);
}

export default SongCardItem;
