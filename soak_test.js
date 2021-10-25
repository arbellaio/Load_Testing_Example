import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 400 }, // ramp up to 400 users
        { duration: '3h56m', target: 400 }, // stay at 400 for ~4 hours
        { duration: '2m', target: 0 }, // scale down. (optional)
    ],
};

const API_BASE_URL = 'https://localhost:5001/api';

export default function () {
    http.batch([
        ['GET', `http://localhost:5000/api/LoadApi/youtube`],
        ['GET', `http://localhost:5000/api/LoadApi/github`],
        ['GET', `http://localhost:5000/api/LoadApi/facebook`],
    ]);

    // to make 1 request every second
    sleep(1);
}