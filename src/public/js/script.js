
/*const clienteBtn    =   document.getElementById('clienteBtn');
const adminBtn      =   document.getElementById('adminBtn');

const selectAdmin  =  () => {
    if(clienteBtn.classList.contains('border-main-yellow') && adminBtn.classList.contains('border-gray-700')) {

        clienteBtn.classList.remove('border-main-yellow', 'bg-black', 'bg-opacity-80');
        clienteBtn.classList.add('border-gray-700', 'bg-main-black');
        adminBtn.classList.remove('border-gray-700', 'bg-main-black');
        adminBtn.classList.add('border-main-yellow', 'bg-black', 'bg-opacity-80');
    }
}

const selectCliente  =  () => {
    if(clienteBtn.classList.contains('border-gray-700') && adminBtn.classList.contains('border-main-yellow')) {

        adminBtn.classList.remove('border-main-yellow', 'bg-black', 'bg-opacity-80');
        adminBtn.classList.add('border-gray-700', 'bg-main-black');
        clienteBtn.classList.remove('border-gray-700', 'bg-main-black');
        clienteBtn.classList.add('border-main-yellow', 'bg-black', 'bg-opacity-80');
    }
}

adminBtn.addEventListener('click', selectAdmin)
clienteBtn.addEventListener('click', selectCliente)*/


//logica para el login

/*const URL_LOGIN = 'http://localhost:3000/api/v1/auth/login'
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async(event) => {
    event.preventDefault();
    const data = {
        CorreoElectronico: document.getElementById('CorreoElectronico').value,
        Contrasena: document.getElementById('Contrasena').value
    }

    try {
        const res = await fetch(URL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!res.ok){
            throw new Error('Error en la solicitud: ' + res.statusText)
        }

        //window.location.href = 'http://localhost:3000/api/v1/usuarios/dashboardUser'
    } catch (err) {
        console.error(err)
    }
})*/

//logica para el logout

/*const urlLogout = 'http://localhost:3000/api/v1/auth/logout'
const cerrarSesionUserBtn = document.getElementById('cerrarSesionUserBtn')

cerrarSesionUserBtn.addEventListener('click', async () => {
    try{
        console.log('clicked logout')
        const res = await fetch(urlLogout, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(!res.ok){
            throw new Error('Error en la solicitud: ' + res.statusText)
        }
    } catch (err) {
        console.error(err)
    }
})*/