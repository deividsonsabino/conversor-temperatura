function calculate() {
    const value = Number(document.getElementById("value").value)
    const temps = document.getElementById("temp")
    const tempSelected = temps.options[temps.selectedIndex].value;
    const fahrenheit = (value * 9 / 5) + 32
    const celsius = (value - 32) * 5 / 9

    if (tempSelected === "celcius") {
        document.getElementById("span").textContent = `${value} C é igual ${celsius.toFixed(1)} F`
    } else {
        document.getElementById("span").textContent = `${value} F é igual ${fahrenheit.toFixed(1)} C`
    }

    document.querySelector(".result").classList.add("result-content")
}

function animation() {
    document.querySelector(".calc").classList.add("animate__animated")
    document.querySelector(".calc").classList.add("animate__fadeInDown")

}