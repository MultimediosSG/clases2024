let libros = [];
document.addEventListener('submit', function(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    
    let libro = {
        name: formData.get('name'),
        autor: formData.get('author'),
        editorial: formData.get('editorial'),
        price: formData.get('price'),
        codigo: formData.get('codigo'),
        in_stock: formData.get('in_stock') ? true : false
    };
    libros.push(libro);
    llenarTabla();
    form.reset();
});

function llenarTabla(){
    let tabla = document.querySelector('#tabla tbody');
    tabla.innerHTML = '';
    libros.forEach((libro, index) => {
        let row = tabla.insertRow();
        row.classList.add('bg-white', 'bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700');
        row.innerHTML = `
            <td class="px-6 py-4">${libro.name}</td>
            <td class="px-6 py-4">${libro.autor}</td>
            <td class="px-6 py-4">${libro.editorial}</td>
            <td class="px-6 py-4">${libro.price}</td>
            <td class="px-6 py-4">${libro.codigo}</td>
            <td class="px-6 py-4">
             <span class="text-xs font-medium me-2 px-2.5 py-0.5 rounded ${libro.in_stock ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}"> ${libro.in_stock ? 'Si': 'No'} </span>
            </td>
           
        `;
    });
}