function convertToHex() {
    const decimalInput = document.getElementById("decimalInput").value;
    
    // Convert the decimal input to hexadecimal
    const hexadecimalResult = Number(decimalInput).toString(16).toUpperCase();
    
    document.getElementById("hexResult").innerText = hexadecimalResult;
}
