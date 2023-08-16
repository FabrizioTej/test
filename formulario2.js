document.addEventListener('DOMContentLoaded', function(event){

    const formulario = document.getElementById('form');

    const email = document.getElementById('email');


    const setValidation = function (conter, campo, mensaje) {
        const divError = document.createElement("div");
        let inp = document.getElementById(`${campo}`)

        if(campo) {
            
            const error = document.getElementById(`${conter}`);
            error.appendChild(divError);
            divError.id = `${campo}-error`;
            divError.classList.add('text-danger');
            divError.textContent = mensaje;
            inp.classList.add('border', 'border-danger');
        }
    }


    const RemoveValidation = function (campo) {
    let error = document.getElementById(`${campo}-error`);
    let inp = document.getElementById(`${campo}`)
        if(error && inp) {
            inp.classList.add('border', 'border-success');
            inp.classList.remove('border', 'border-danger');
            error.remove()

        }
    }



    // correo start



    const validateEmail = function () {
        const correoValue = email.value;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


        if (correoValue === "") { // Otra forma: emailValue.length <= 0
            RemoveValidation('email')

            setValidation('correo', 'email', 'El campo email es requerido')

            return false;
        }

        if (!emailRegex.test(correoValue)) {
            RemoveValidation('email')

            setValidation('correo','email', 'El campo debe contener un formato email')
            return false;
        }

        RemoveValidation('email')
        return true;

    }
        // correo end




        // contraseña start


    let contra = document.getElementById("password");

    const validatePassword = function () {
        if (contra.value == "") {
            RemoveValidation('password')

            setValidation('div_contra', 'password', 'El campo de contraseña es requerido')
            return false
        }
        
            RemoveValidation('password')


    }
        // contraseña end




        // nombre start
        let nombres = document.getElementById('nombre')
        let ValidateNombre = function () {

            if (nombres.value == "") {
                RemoveValidation("nombre")
                setValidation("div_nombre", "nombre", "El campo nombre es requerido");
                return false
            }

            RemoveValidation("nombre")

        }




        // nombre end








    const validarFormulario = function(e) {
        e.preventDefault();
        if(validateEmail() && validatePassword( ) && ValidateNombre()) {
            // formulario.submit();
        }
    }

    formulario.addEventListener('submit', validarFormulario);

}) 