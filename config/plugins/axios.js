export default ({$axios, req}) => {
    $axios.defaults.xsrfCookieName = 'csrftoken';
    $axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    // $axios.defaults.accessControlAllowOrigin = '*';
    // $axios.defaults.accessControlAllowMethods = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
    // $axios.defaults.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';

    const headers = req && req.headers ? Object.assign({}, req.headers) : {};
    $axios.setHeader('X-Forwarded-Host', headers['x-forwarded-host']);
    $axios.setHeader('X-Forwarded-Port', headers['x-forwarded-port']);
    $axios.setHeader('X-Forwarded-Proto', headers['x-forwarded-proto']);
    // $axios.setHeader('Access-Control-Allow-Origin', headers['*']);
    // $axios.setHeader('Access-Control-Allow-Methods', headers['GET,PUT,POST,DELETE,PATCH,OPTIONS']);

    // let endpoint;
    // if ($config.proxyUrl) {
    //     endpoint = $config.proxyUrl;
    // } else if ($config.backendUrl) {
    //     endpoint = $config.backendUrl;
    // } else {
    //     endpoint = 'http://backend:8000/';
    // }
    //
    // if (process.client) {
    //     endpoint = `${location.origin}/`;
    // }
    $axios.setBaseURL('https://apisite.aioneffect.com');
};
