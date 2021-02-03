import axios from 'axios';

axios.defaults.baseURL = 'https://api.hnpwa.com/v0/';
// 요청 인터셉터
axios.interceptors.request.use(function (config) {
    // 요청 전에 로딩 오버레이 띄우기
    return config;
}, function (error) {
    // 에라 나면 로딩 끄기
    return Promise.reject(error);
});

// 응답 인터셉터
axios.interceptors.response.use(function (response) {
    // 응답 받으면 로딩 끄기
    return response;
}, function (error) {
    // 응답 에러 시에도 로딩 끄기
    return Promise.reject(error);
});


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

function fetchItemInfo(id) {
    return axios.get("/item/" + id + ".json");
}

export {fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo}