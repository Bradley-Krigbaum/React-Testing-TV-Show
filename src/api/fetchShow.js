import axios from "axios";


export const fetchShow = () => {
    return axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(res => {
            console.log("bk: fetchShow.js: fetchShow: res: ", res);
            return res;
        })
        .catch(err => {
            console.error("error fetching data from api, err: ", err.message);
            return err;
          });
  };