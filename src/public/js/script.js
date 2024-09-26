
const clienteBtn    =   document.getElementById('clienteBtn');
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
clienteBtn.addEventListener('click', selectCliente)