import axios from 'axios';

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['Access-Control-Allow-Methods'] =
    'GET,PUT,POST,DELETE,PATCH,OPTIONS';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export default async function api(method, url, data) {
    const response = await axios[method](
        `https://us-central1-lotus-api-6c108.cloudfunctions.net/${url}`,
        data
    );
    return response;
}
