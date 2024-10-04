"Use Strict"
// const cart = JSON.parse(localStorage.getItem('cart')) || [];
// const count = cart.length;
// const navcart = document.getElementById('nav-cart');

// console.log(count);

// navcart.innerHTML='cart <span class="bposition-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>'


function buy(productName, imageUrl, rate) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, image: imageUrl, rate: rate });
    localStorage.setItem('cart', JSON.stringify(cart));

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Item Added to cart"
    });
}

function btnclick() {
    var params = {
        form_name: document.getElementById('ftxt1').value,
        email_id: document.getElementById('ftxt2').value,
        phone: document.getElementById('ftxt3').value
    }
    if (params.form_name === "" && params.email_id === "" && params.phone === "") {
        alert("Please Fill All input fields")
    } else {
        try {
            emailjs.send("service_zmbsha7", "template_14s366v", params).then(function (res) {
                Swal.fire({
                    title: "No worries",
                    text: "Our Excecuters Will call you",
                    icon: "info"
                });
            })

        } catch (err) {
            alert("your error is " + err)
        }
    }
}