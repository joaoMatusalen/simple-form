const form = document.getElementById('form')
const developer = []

form.addEventListener('submit', ev =>{
    ev.preventDefault()
    const fullname = document.getElementById('fullnameInput').value 
    const email = document.getElementById('emailInput').value
    const age = document.getElementById('ageInput').value
    const description = document.getElementById('select').value
    const recommend = document.querySelector('input[type="radio"]:checked').value
    const techs = document .querySelectorAll('input[name="checkbox"]:checked')
    let techSelected = []
    techs.forEach((tech) => {
        techSelected.push(tech.value)
    })
    
    const textarea = document.getElementById('textarea').value
    
    const dev = {fullname: fullname, email: email, age: age, description: description, recommend: recommend, techs: techSelected, sugestion: textarea }
    developer.push(dev)

    console.log(developer)
    
    form.reset()

})

