const create1 = document.getElementById('create1')
const api1 = ('https://dog.ceo/api/breeds/list/all')
const img1 = document.getElementById('imgPuppie1')
const race = document.getElementById('race')

const create2 = document.getElementById('create2')
const api2 = ('https://dog.ceo/api/breeds/image/random')
const img2 = document.getElementById('imgPuppie2')


create2.addEventListener('click',(e)=>{
    fetch(api2)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const url = res.message
            img2.setAttribute('src',url)
        })
        e.preventDefault()
})


const completeOptions = () =>{
    fetch(api1)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(data => {
            const options = data.message
            const fragment = document.createDocumentFragment()
            for(const optionValor in options){
                const option = document.createElement('OPTION')
                option.textContent = optionValor
                fragment.append(option)
            }
            race.append(fragment)
        })
}

create1.addEventListener('click',(e) =>{
    const opcion = document.getElementById('race').value
    fetch(`https://dog.ceo/api/breed/${opcion}/images/random`)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const newUrl = res.message
            img1.setAttribute('src',newUrl)
        })
        e.preventDefault()
})

window.onload = completeOptions()
