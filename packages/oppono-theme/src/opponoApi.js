import axios from 'axios';

const opponoApi = axios.create({
  baseURL: 'https://staging-5em2ouy-oer23r2mz66wc.ca-1.platformsh.site/wp-json/oppono/v1',
  timeout: 0,
});
export default opponoApi;