import { url } from "../../config/config.js";

let wrapper = document.querySelector(".wrapper")

// 1. получаем id из ссылки
let params = new URLSearchParams(window.location.search)
let id = params.get("id")

// 2. получаем одну вакансию
async function getJob() {
 try {
    let { data } = await axios.get(`${url}/${id}`)
    showJob(data)
 } catch (error) {
    console.log(error);
 }
}

// 3. выводим на страницу
function showJob(elem){
    wrapper.innerHTML = ""

    const container = document.createElement("div")

    container.innerHTML = `
     <p class="breadcrumb">Main > Latest job > ${elem.title}</p>

  <div class="header">
    <h1>${elem.title}</h1>
    <button class="apply"><a href="../../details/index.html">APPLY</a></button>
  </div>

  <hr />

  <div class="cards">
    <div class="card">
      <p>Closing date</p>
      <span>${elem.date}</span>
    </div>

    <div class="card">
      <p>Category</p>
      <span>${elem.category}</span>
    </div>

    <div class="card">
      <p>Seniority</p>
      <span>${elem.level}</span>
    </div>

    <div class="card">
      <p>Location</p>
      <span>${elem.city}</span>
    </div>
  </div>
    `

    wrapper.appendChild(container)
}

// 4. запускаем
getJob()