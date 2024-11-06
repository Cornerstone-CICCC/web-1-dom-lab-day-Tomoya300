const input = document.querySelectorAll("input")
input.forEach(element => {
    element.setAttribute("required", "")
})

const email = document.getElementById("email")
email.setAttribute("pattern", ".*@canada\.ca")

// Select the form and the table body
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevents the form from submitting and refreshing the page

  // Get the values from the form
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const hireDate = document.getElementById('hire_date').value;
  const photo = document.querySelector('input[type="file"]').files[0];

  // Create a new row for the table
  const row = document.createElement('tr');

  // Create and add cells to the row
  const photoCell = document.createElement('td');
  const firstNameCell = document.createElement('td');
  const lastNameCell = document.createElement('td');
  const emailCell = document.createElement('td');
  const hireDateCell = document.createElement('td');
  const actionsCell = document.createElement('td');

  // Add the form data to the cells
  firstNameCell.textContent = firstname;
  lastNameCell.textContent = lastname;
  emailCell.textContent = email;
  hireDateCell.textContent = hireDate;

  // Add the photo (image preview) to the photo cell if there is a file
  if (photo) {
    const photoURL = URL.createObjectURL(photo);
    const img = document.createElement('img');
    img.src = photoURL;
    img.alt = 'Profile Photo';
    img.style.width = '50px';  // Resize the image to fit in the table
    img.style.height = '50px';
    photoCell.appendChild(img);
  }

  // Add a simple "Delete" button to the actions cell
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    row.remove();  // Remove the row when the delete button is clicked
  });
  actionsCell.appendChild(deleteButton);

  // Append all the cells to the row
  row.appendChild(photoCell);
  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(emailCell);
  row.appendChild(hireDateCell);
  row.appendChild(actionsCell);

  const employeeList = document.getElementById('employeeList');

  // Append the row to the table body
  employeeList.appendChild(row);

  // Optionally, reset the form after submission
  form.reset();
});



// const table = document.querySelector("table")
// const form = document.querySelector("form")

// form.addEventListener('submit', (event) => {
//     event.preventDefault();


//     const firstName = document.getElementById("firstname").value
//     const lastName = document.getElementById("lastname").value
//     const contact = document.getElementById("email").value
//     const hireDate = document.getElementById("hire_date").value
//     const photo = document.querySelector("input[type='file']").files[0]

//     if (!photo) {
//         alert("Please upload a photo.");
//         return;
//     }

//     const tRow = document.createElement("tr")

//     const tdPhoto = document.createElement("td")
//     const tdFirstName= document.createElement("td")
//     const tdLastName= document.createElement("td")
//     const tdContact= document.createElement("td")
//     const tdHireDate= document.createElement("td")
//     const tdActions= document.createElement("td")

//     if (photo) {
//         const photoURL = URL.createObjectURL(photo)
//         const img = document.createElement("img")
//         img.src = photoURL
//         img.alt = "employee's photo"
//         img.width = "50px"
//         img.height = "50px"
//         tdPhoto.appendChild(img)
//     }

//     tdFirstName.textContent = firstName
//     tdLastName.textContent = lastName
//     tdContact.textContent = contact
//     tdHireDate.textContent = hireDate

//     const deleteBtn = document.createElement("button")
//     deleteBtn.textContent = "Delete"
//     tdActions.appendChild(deleteBtn)

//     deleteBtn.addEventListener("click", () => {
//         tRow.remove()
//     })

//     tRow.appendChild(tdPhoto)
//     tRow.appendChild(tdFirstName)
//     tRow.appendChild(tdLastName)
//     tRow.appendChild(tdContact)
//     tRow.appendChild(tdHireDate)
//     tRow.appendChild(tdActions)

//     const employeeList = document.getElementById("employeeList")

//     employeeList.appendChild(tRow)

//     form.reset()

// })
