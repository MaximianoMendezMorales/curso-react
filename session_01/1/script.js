document.addEventListener('DOMContentLoaded', () => {
    const inputOption = document.querySelector('#input-option')
    const addOption = document.querySelector('#add-option')
    const list = document.querySelector('#lista')

    addOption.addEventListener('click', () => {
        const li = document.createElement('p')
        li.innerText = inputOption.value

        const checkOption = document.createElement('input')
        checkOption.type = 'checkbox'
        checkOption.addEventListener('change', ({ target }) => li.style.textDecorationLine = target.checked ? 'line-through': 'none')

        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        btnDelete.addEventListener('click', () => li.remove())

        li.append(checkOption, btnDelete);

        list.appendChild(li)
    })
})