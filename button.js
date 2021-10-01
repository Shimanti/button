const button = document.querySelector('button')
button.addEventListener('click', changeButton)

function changeButton() {
  const btn = document.querySelector('#btn')
  if (btn.innerHTML == "Fiction") {
      btn.innerHTML = "Non Fiction"
  } else if (btn.innerHTML == "Non Fiction") {
      btn.innerHTML = "Fiction"

  }
}
