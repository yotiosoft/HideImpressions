document.addEventListener('DOMContentLoaded', function() {
    if (options.hideEnabled) {
        document.getElementById("select_button").textContent = "OFF";
    }
    else {
        document.getElementById("select_button").textContent = "ON";
    }
});

document.querySelectorAll(".select").forEach((elm) => {
    elm.addEventListener("click", (e) => {
        var options, option_name = e.target.innerText;
        if (option_name == "ON") {
            options = {
                hideEnabled : true
            }
            document.getElementById("select_button").textContent = "OFF";
        } else {
            options = {
                hideEnabled : false
            }
            document.getElementById("select_button").textContent = "ON";
        }
        chrome.storage.sync.set(options);
        document.querySelector("#msg").innerText = `Set to ${option_name}.`;
    });
});