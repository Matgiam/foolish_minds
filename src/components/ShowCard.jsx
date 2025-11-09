import { positions } from "../constants";

function ShowCard() {
	return (
		<div className="relative slider-wrapper">
			<div className="band">
				{positions.map((position, index) => (
					<div key={index} className={`vd-card  ${position.left} ${position.rotation}`}>
						<img src={`shows/${position.image}.png`} alt="homescreen" className="rounded-2xl" />
					</div>
				))}
			</div>
		</div>
	);
}

export default ShowCard;
