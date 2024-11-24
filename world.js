document.getElementById("lookup").addEventListener("click", function () {
    const country = document.getElementById("country").value;
    const resultDiv = document.getElementById("result");


    resultDiv.innerHTML = "Loading...";

    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `world.php?country=${encodeURIComponent(country)}`, true);

    
    xhr.onload = function () {
        if (xhr.status === 200) {
            resultDiv.innerHTML = xhr.responseText;
        } else {
            resultDiv.innerHTML = "Error fetching data.";
        }
    };

    
    xhr.onerror = function () {
        resultDiv.innerHTML = "An error occurred during the request.";
    };


    xhr.send();
});