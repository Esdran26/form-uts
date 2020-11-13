const inputContent = [
    {
        id: 'input-numdoc',
        labelValue: 'Número de documento',
        type: 'number',
        name: 'number-document'
    },
    {
        id: 'input-names',
        labelValue: 'Nombres',
        type: 'text',
        name: 'names'
    },
    {
        id: 'input-last-names',
        labelValue: 'Apellidos',
        type: 'text',
        name: 'lastnames'
    },
    {
        id: 'input-email',
        labelValue: 'Correo electrónico',
        type: 'email',
        name: 'email'
    },
    {
        id: 'input-date',
        labelValue: 'Fecha de nacimiento',
        type: 'date',
        name: 'date'
    },
    {
        id: 'input-score',
        labelValue: 'Puntaje Sisben',
        type: 'number',
        name: 'score'
    },
    {
        id: 'input-tel',
        labelValue: 'Celular',
        type: 'tel',
        name: 'tel'
    }
];

const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', () => {

    inputContent.forEach(content => {
        let { id, labelValue, type, name } = content;

        if(type !== 'tel') {
            form.innerHTML += `
            
                <div id="${id}" class="input-div">
                    <label for="${id}">${labelValue} <b>*</b></label>
                    <input class="input-form" type="${type}" name="${name}" required id="${id}">
                </div>
                <br><br>
                
            `
        }
        else {
            form.innerHTML += `

                <div id="${id}" class="input-div">
                    <label for="${id}">${labelValue} <b>*</b></label>
                    <input class="input-form" type="${type}" name="${name}" required id="${id}">
                </div>

            `
        }
    });
});