let layout = document.querySelector(".grid")

export function showJobs(data){
    layout.innerHTML = ""

    data.forEach(elem => {
        const card = document.createElement("div")
        card.classList.add("card")

      card.innerHTML = `
<div class="top">
  <h3>${elem.title}</h3>
  <span class="badge">${elem.level}</span>
</div>
<p class="category">${elem.category}</p>

<div class="bottom">
  <button class="btnSee"><a href="./c-developer/index.html?id=${elem.id}" class="btn">SEE MORE</a></button>
  <span>${elem.city}</span>
</div>
`
      let btnSee = card.querySelector(".btnSee")
      btnSee.onclick = ()=>{
        location.href = "./cdeveloper/index.html"
      }

        layout.appendChild(card)
    });
}