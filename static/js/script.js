
function mostrarCampoDocumento() {
    const tipoDocumento = document.getElementById("tipo-documento").value;
    const campoDocumento = document.getElementById("campo-documento");
    const labelDocumento = document.getElementById("label-documento");

    if (tipoDocumento === "RUT" || tipoDocumento === "Pasaporte") {
        campoDocumento.style.display = "block";
        labelDocumento.textContent = `Ingrese su ${tipoDocumento}:`;
        document.getElementById("numero-documento").placeholder = `Ingrese su ${tipoDocumento}`;
    } else {
        campoDocumento.style.display = "none";
        document.getElementById("numero-documento").value = "";
    }
}
