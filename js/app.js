const input = document.querySelectorAll("input")
input.forEach(element => {
    element.setAttribute("required", "")
})

const email = document.getElementById("email")
email.setAttribute("pattern", ".*@canada\.ca")


const form = document.querySelector("form")
const employeeList = document.getElementById("employeeList")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form)

  const firstName = formData.get("firstname")
  const lastName = formData.get("lastname")
  const email = formData.get("email")
  const hireDate = formData.get("hire_date")
  const photo = formData.get("photo")

  const row = document.createElement("tr")

  const photoTd = document.createElement("td")
  const firstNameTd = document.createElement("td")
  const lastNameTd = document.createElement("td")
  const emailTd = document.createElement("td")
  const hireDateTd = document.createElement("td")
  const actionsTd = document.createElement("td")

  if (photo) {
    const photoURL = URL.createObjectURL(photo)
    const img = document.createElement("img")
    img.src = photoURL
    img.alt = "employee's photo"
    img.width = 50
    img.height = 50
    photoTd.appendChild(img)
  } else {
    photoTd.textContent = "No photo"
  }

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener("click", () => {
    const confirmation = window.confirm("Are you sure you want to delete this employee?")
    if (confirmation) {
      row.remove()
    }
  })
  actionsTd.appendChild(deleteBtn)

  firstNameTd.textContent = firstName
  lastNameTd.textContent = lastName
  emailTd.textContent = email
  hireDateTd.textContent = hireDate

  row.appendChild(photoTd)
  row.appendChild(firstNameTd)
  row.appendChild(lastNameTd)
  row.appendChild(emailTd)
  row.appendChild(hireDateTd)
  row.appendChild(actionsTd)

  employeeList.appendChild(row)

  form.reset()

})

