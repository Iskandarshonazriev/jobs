let job = JSON.parse(localStorage.getItem("job"))

if (job) {
  document.querySelector('input[name="title"]').value = job.title
  document.querySelector('input[name="category"]').value = job.category
  document.querySelector(".full").value = job.location
}let cancel = document.querySelector(".cancel")

cancel.onclick = () => {
  location.href = "../latest-job/cdeveloper/index.html"
}