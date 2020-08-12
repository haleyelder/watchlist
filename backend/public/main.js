// UPDATE
const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/titles', {
        method: 'put',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            title: "The Fifth Element",
            year: 1996     
        })
    })
    .then (res => {
        if (res.ok) return res.json()
    })
    .then (response => {
        window.location.reload(true)
    })
})

// DELETE

const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
    fetch('/titles', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "The Fifth Element"
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        window.location.reload()
    })
})

// MESSAGE

// const messageDiv = document.querySelector('#message')

// deleteButton.addEventListener('click', _ => {
//     fetch()
//         .then()
//         .then(response => {
//             if (response === "nothing to delete") {
//                 messageDiv.textContent = "nothing to delete"
//             } else {
//                 window.location.reload(true)
//             }
//         })
//         .catch()
// })