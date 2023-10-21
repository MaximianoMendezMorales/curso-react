document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(document.getElementById('root'))
    const options = []

    const addOption = () => {
        const text = document.getElementById('input-option').value
        options.push({
            completed: false,
            text: text
        })

        render()
    }

    const changeEstatus = (option) => {
        option.completed = !option.completed
        render()
    }

    const deleteOption = (option) => {
        const index = options.indexOf(option)
        options.splice(index, 1)
        render()
    }

    const render = () => {
        const h1 = React.createElement(
            "h1",
            {
                id: 'titulo',
                className: 'aaa',
                style: {
                    color: 'red'
                },
                key: 'title'
            },
            "Mi primera pagina con ReactJS"
        )

        const form = React.createElement('div', {}, [
            React.createElement(
                "input",
                {
                    type: "text",
                    placeholder: "Nueva Opcion",
                    key: "input",
                    id: "input-option"
                }
            ),
            React.createElement(
                "button",
                {
                    type: "button",
                    onClick: addOption,
                    key: "button"
                },
                "Agregar"
            )
        ])

        const list = React.createElement(
            "ul",
            {
                key: "lista"
            },
            options.map((option, index) => {
                return React.createElement(
                    "li", 
                    {
                        key: `opt${index}`
                    },
                    [
                        React.createElement("input", { 
                                type: 'checkbox', 
                                key: `chx${index}`, 
                                checked: option.completed, 
                                onChange: () => changeEstatus(option)
                            }
                        ),
                        React.createElement("span", {
                                style: {
                                    textDecorationLine: option.completed ? 'line-through': 'none' 
                                },
                                key: `spn${index}`
                            },
                            option.text
                        ),
                        React.createElement("button", {
                                key: `btn${index}`,
                                onClick: () => deleteOption(option)
                            }, 
                            "x"
                        )
                    ]
                )
            })
        )

        root.render([h1, form, list])
    }

    render()
})