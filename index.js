Potencia = () => {
    let base = document.getElementById('base').value;
    let expo = document.getElementById('exponente').value;
    let result = base;
    while(expo > 1)
    {
        result = result * base;
        expo--;
    }
    document.getElementById('result').innerText = result;
    return result;
}

