import axios from 'axios';

axios.defaults.baseURL = 'https://api.hnpwa.com/v0/';

function fetchNewsList() {
	return axios.get("/news/1.json");
}

function fetchAskList() {
	return axios.get("/ask/1.json");
}

function fetchJobsList() {
	return axios.get("/jobs/1.json");
}

function fetchUserInfo(name) {
	return axios.get("/user/" + name + ".json");
}

export {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo}