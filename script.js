function submitUpdate() {

    const text = document.getElementById("updateText").value

    if(text === "") {
        alert("Please enter an update")
        return
    }

    const li = document.createElement("li")
    li.textContent = text

    document.getElementById("updatesList").appendChild(li)

    document.getElementById("updateText").value = ""
}
