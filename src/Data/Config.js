import axios from "axios";

export const SetAuthToken = token => {
	if (token) {
		axios.defaults.headers.common["Authorization"] = token;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};

export const useURL = process.env.REACT_APP_BASE_URL;
// export const useURL =
// 	process.env.NODE_ENV === "development"
// 		? "http://localhost:8801"
// 		: process.env.REACT_APP_BASE_URL;

export const SetDefaultHeaders = () => {
	axios.defaults.baseURL = useURL;
};
