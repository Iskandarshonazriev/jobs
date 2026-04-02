import { url } from "../../config/config.js";

async function getJobs() {
  try {
    let {data}= await axios.get(url)
    showJobs(data)
  } catch (error) {
    console.log(error);
  }
}

let apply = document.querySelector(".apply-btn")
apply.onclick = ()=>{
  
}