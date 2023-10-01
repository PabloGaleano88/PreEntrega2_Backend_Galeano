
document.getElementById('contenido').addEventListener('click', async function (event) {
    console.log(event.currentTarget.id)
    if (event.target.id === 'purchase') {
        const productId = event.target.getAttribute('data-productid');
        const cartId = '65164a3eb27a0697f1966a65'; 
        try {
            const response = await fetch(`http://localhost:8080/api/carts/${cartId}/products/${productId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto Agregado',
                    text: `El producto ha sido agregado al carrito exitosamente.\n CartId:65164a3eb27a0697f1966a65`,
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un error al agregar el producto al carrito.',
                });
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al agregar el producto al carrito.',
            })
        }
    }
});
