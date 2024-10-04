"Use Strict"

console.log("hello");

function buy(productName, imageUrl, rate) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, image: imageUrl, rate: rate });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("success")
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