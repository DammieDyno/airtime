let out = document.getElementById("show");
let network = document.getElementById("select");
let amount = document.getElementById("selectt");
let loadd = document.getElementById("enter");
let desk = document.getElementById("showDesk")
let airtime;
let allPins = []


function generate() {
    out.innerHTML = ""
    if (network.value == '' || amount.value == '') {
        alert("Select an Amount and a service provider ")
    } else {
        for (let i = 1; i <= 16; i++) {
            airtime = Math.floor(Math.random() * 10)
            out.innerHTML += airtime
        }
        console.log(out.innerHTML);

        let date = new Date()
        let pins = {
            pin: out.innerHTML,
            network: network.value,
            amount: amount.value,
            date: `${date.toLocaleString()}`
        }
        console.log(pins);
        allPins.push(pins)
        console.log(allPins);
        desk.innerHTML=""
        for (let index = 0; index < allPins.length; index++) {
            const element = allPins[index];
            console.log(element);
            desk.innerHTML +=  `
            <td>${element.pin}</td>
            <td>${element.network}</td>
            <td>${element.amount}</td>
            <td>${element.date}</td>
            `
        }


    }
    out.innerHTML += `<button title="copy" id="tool" onclick="clipcopy()"><i class="fa-solid fa-copy"></i></button>`
}


function load() {
    if (loadd.value == '') {
        alert("You haven't enter your airtime yet")
    }
    else if (loadd.value.startsWith("*311*") && loadd.value.includes(airtime) && loadd.value.endsWith("#")) {
        alert(`Account recharge of ${network.value} ${amount.value} was successful, 1hr free on Tiktok + 1.2GB N500, Dial *406*2# to buy.`)
    } else {
        alert("Dear customer, this pin is incorrect and your line will be DISABlED from the service after 5 incorrect attempts ")
    }
    console.log(network.value, amount.value);
}
function clipcopy() {
    navigator.clipboard.writeText(out.innerText)
}
