
function submitData() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name == '') {
        return alert("email wajib diisi")
    } else if (email == '') {
        return alert("email wajib diisi")
    } else if (phone == '') {
        return alert("email wajib diisi")
    } else if (subject == '') {
        return alert("email wajib diisi")
    } else if (message == '') {
        return alert("email wajib diisi")
    }

    // window.location.reload()

    let a = document.createElement('a')

    a.href = `mailto:${email}?subject=${subject} &body=Hallo My Name ${message} please call me ${phone}`

    a.click() //untuk menjalankan tag anchor


    //belajar sedikit objek
    
    let dataObject = {
        namaBelakang: name,
        email: email,
        phoneNumber: phone,
        subject:subject,
        message:message
    }
    console.log(dataObject)
    window.location.reload();
}

