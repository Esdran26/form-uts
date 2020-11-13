const inputContent = [
    {
        id: 'input-numdoc',
        labelValue: 'Número de documento',
        type: 'text',
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
        type: 'text',
        name: 'score'
    },
    {
        id: 'input-tel',
        labelValue: 'Celular',
        type: 'text',
        name: 'tel'
    }
];

const inputContentElement = document.getElementById('input-content');

document.addEventListener('DOMContentLoaded', () => {

    inputContent.forEach(content => {
        let { id, labelValue, type, name } = content;

        if(type !== 'tel' && id !== 'input-numdoc' && id !== 'input-score' && id !== 'input-tel' ) {
 
            inputContentElement.innerHTML += `
            
                <div id="${id}" class="input-div">
                    <label for="${id}">${labelValue} <b>*</b></label>
                    <input minlength="4" class="input-form" type="${type}" name="${name}" required id="${id}">
                </div>
                <br><br>
                
            `
        }
        else if(id === 'input-numdoc') {
            inputContentElement.innerHTML += `
            
                <div id="${id}" class="input-div">
                    <label for="${id}">${labelValue} <b>*</b></label>
                    <input 
                        minlength="9" 
                        class="input-form" 
                        type="${type}" 
                        name="${name}" 
                        required 
                        id="${id}"
                        onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                        >
                </div>
                <br><br>
                
            `
        }
        else if(id === 'input-tel') {
            inputContentElement.innerHTML += `
            
                <div id="${id}" class="input-div">
                    <label for="${id}">${labelValue} <b>*</b></label>
                    <input 
                        minlength="9" 
                        class="input-form" 
                        type="${type}" 
                        name="${name}" 
                        required 
                        id="${id}"
                        onkeypress='return event.charCode >= 43 && event.charCode <= 57'
                        >
                </div>
                <br><br>
                
            `
        }
        else if(id === 'input-score') {
            inputContentElement.innerHTML += `
            
                <div id="${id}" class="input-div">
                    <label for="${id}">${labelValue} <b>*</b></label>
                    <input 
                        minlength="1" 
                        class="input-form" 
                        type="${type}" 
                        name="${name}" 
                        required 
                        id="${id}"
                        onkeypress='return event.charCode >= 46 && event.charCode <= 57'
                        >
                </div>
                <br><br>
                
            `
        }
        else {
            inputContentElement.innerHTML += `

                <div id="${id}" class="input-div">
                    <label for="${id}">${labelValue} <b>*</b></label>
                    <input minlength="4" class="input-form" type="${type}" name="${name}"  id="${id}" required>
                </div>

            `
        }
    });
});


const buttonSubmit = document.getElementById('submit');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(buttonSubmit.value);

    buttonSubmit.disabled = true;
    buttonSubmit.value = 'Cargando...';
    buttonSubmit.style.backgroundColor = 'lightgray';
    buttonSubmit.style.color = 'gray';
    buttonSubmit.style.border = '3px solid lightgray';

    setTimeout(() => {
        Swal.fire({
            title: 'Gracias Por Registrarte!',
            text: 'Te informaremos sobre nuevas noticias',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        });

        buttonSubmit.disabled = false;
        buttonSubmit.value = 'Enviar Información';
        buttonSubmit.style.backgroundColor = 'transparent';
        buttonSubmit.style.color = 'black';
        buttonSubmit.style.border = '3px solid #b3ce33';
    }, 1000);
});