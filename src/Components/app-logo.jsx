import { Link } from "react-router-dom";
// import whiteLogo from "../Assets/brand-white.png";
// import darkLogo from "../Assets/brand-dark.png";

const AppLogo = ({ height, type }) => {
	return (
		<Link to="/" className="">
			{type === "dark" ? (
				<img
					src={process.env.REACT_APP_IMAGE_URL}
					alt=""
					style={{ height: height }}
				/>
			) : (
				<img
					src={process.env.REACT_APP_IMAGE_URL_LIGHT || process.env.REACT_APP_IMAGE_URL}
					alt=""
					style={{ height: height }}
				/>
			)}
		</Link>
	);
};

export default AppLogo;
