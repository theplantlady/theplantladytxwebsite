import axios from "axios";

export async function getApi(url) {
    axios
        .get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            this.errored = true;
        })
        .finally(() => (this.loading = false));
}

export async function postApi(url, data) {
    axios.post(url, data)
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
        console.log(error)
    });
}
