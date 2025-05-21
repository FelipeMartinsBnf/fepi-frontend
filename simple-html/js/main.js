
const linkExterno = document.querySelector("a[title='Google Maps']");

linkExterno.addEventListener('click', (e) => {
    confirm("Você será redirecionado a um link externo") ? true : e.preventDefault()
})

