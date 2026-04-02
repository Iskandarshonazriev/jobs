const url = "http://localhost:3000/jobs"
const grid = document.querySelector(".grid")

const categoryFilter = document.getElementById("categoryFilter")
const levelFilter = document.getElementById("levelFilter")

async function getJobs() {
  try {
    let query = []

    if (categoryFilter.value !== "all") {
      query.push(`category=${categoryFilter.value}`)
    }

    if (levelFilter.value !== "alllevel") {
      query.push(`level=${levelFilter.value}`)
    }

    let finalUrl = url

    if (query.length > 0) {
      finalUrl += "?" + query.join("&")
    }

    const res = await fetch(finalUrl)
    const data = await res.json()

    showJobs(data)
  } catch (error) {
    console.log(error)
  }
}

// вывод
function showJobs(data) {
  grid.innerHTML = ""

  data.forEach(job => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
      <div class="top">
        <h3>${job.title}</h3>
        <span class="badge">${job.level}</span>
      </div>
      <p class="category">${job.category}</p>
      <div class="bottom">
        <button onclick="goToDetails(${job.id})">SEE MORE</button>
        <span>${job.city}</span>
      </div>
    `

    grid.appendChild(card)
  })
}

categoryFilter.onchange = getJobs
levelFilter.onchange = getJobs

function goToDetails(id) {
  localStorage.setItem("jobId", id)
  window.location.href = "details.html"
}

// старт
getJobs()