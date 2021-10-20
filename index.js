// Add your code here
function submitData(name,  email){
    const body = document.querySelector('body')
    const p = document.createElement('p')

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
    .then(resp => resp.json())
    .then(data => {
        p.textContent = `${data.id}`
        body.appendChild(p)
    })
    .catch(error => {
        p.textContent = `${error}`
        body.appendChild(p)
    })
}