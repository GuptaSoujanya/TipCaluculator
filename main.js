const data = () => {
    let amount = document.getElementById("amount").value;

    let person = document.getElementById("person").value;

    let select = document.getElementById("service").value;

    if (amount == 0 || select == '0') {
        alert("Please enter required values!")
        return;
    }

    if (person == "" || person >= 1) {
        person = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let data = 0;
    switch (select) {
        case 'amzaing':
            data = (amount * 35 / 100) / person;
            break;
        case 'good':
            data = (amount * 25 / 100) / person;
            break;
        case 'satisfine':
            data = (amount * 15 / 100) / person;
            break;
        case 'bad':
            data = (amount * 10 / 100) / person;
            break;
        case 'disgusting':
            data = (amount * 5 / 100) / person;
            break;
    }
    document.getElementById("tip-container").style.display = "block";
    document.getElementById("tip").style.display = "inline"
    document.getElementById("tip").innerText = data
    document.getElementById("each").style.display = "inline"


}

document.getElementById("tip-container").style.display = "none";
document.getElementById("tip").style.display = "none";
document.getElementById("each").style.display = "none";