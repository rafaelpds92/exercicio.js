document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const message = document.getElementById('message');

    if (campoB > campoA) {
        message.textContent = "Formulário válido! Campo B é maior que Campo A.";
        message.style.color = "green";
    } else {
        message.textContent = "Formulário inválido! Campo B deve ser maior que Campo A.";
        message.style.color = "red";
    }
});
