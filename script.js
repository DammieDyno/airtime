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
            isUsed: false,
            date: `${date.toLocaleString()}`
        }
        console.log(pins);
        allPins.push(pins)
        console.log(allPins);
    }
    dispPin()
    out.innerHTML += `<button title="copy" id="tool" onclick="clipcopy()"><i class="fa-solid fa-copy"></i></button>`
}

function dispPin(){
    desk.innerHTML=""
        for (let index = 0; index < allPins.length; index++) {
            const element = allPins[index];
            console.log(element);
            desk.innerHTML +=  `
            <td id="ccPinn${index}">
                ${element.pin}
                <button title="copy" id="tool" onclick="clipcopy(${index})"><i class="fa-solid fa-copy"></i></button>
            </td>
            <td>${element.network}</td>
            <td>${element.amount}</td>
            <td>${element.isUsed? "Been Used" : "Not Used"}</td>
            <td>${element.date}</td>
            `
        }
}
dispPin()
function load() {
    console.log(loadd.value);
    console.log(loadd.value.slice(5, 21));
    // console.log(loadd.value.slice(loadd.value.lastIndexOf("*"), 21));

    let ppin = loadd.value.slice(5, 21);
    let loadingPin = allPins.find((el)=> el.pin == ppin);
    console.log(loadingPin);
    if (loadd.value == '') {
        alert("You haven't enter your airtime yet")
    }else if(loadingPin == undefined){
        alert("Invalid Pin")
    }
    else if (loadingPin.isUsed == true) {
        alert("This card has already been used by you");
    } else if(loadd.value.startsWith("*311*") && loadd.value.includes(loadingPin.pin) && loadd.value.endsWith("#")){
        loadingPin.isUsed = true;
        alert(`Account recharge of ${network.value} ${amount.value} was successful, 1hr free on Tiktok + 1.2GB N500, Dial *406*2# to buy.`);
        dispPin()
    }else{
        alert("Dear customer, this pin is incorrect and your line will be DISABlED from the service after 5 incorrect attempts ")
    }
    console.log(network.value, amount.value);
}
function clipcopy(i) {
    let ccPinn = document.getElementById(`ccPinn${i}`)
    navigator.clipboard.writeText(ccPinn.innerText)
}
