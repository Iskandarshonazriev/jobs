
import { url } from "../config/config.js";
import { showJobs } from "./dom.js";

export async function getJobs() {
    try {
        let {data} = await axios.get(url)
        showJobs(data)
    } catch (error) {
        console.log(error);
    }
}