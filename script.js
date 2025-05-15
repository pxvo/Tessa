function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function adicionarConsulta() {
    const nome = document.getElementById("nome").value;
    const hora = document.getElementById("hora").value;

    if (nome && hora) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>Próxima consulta</h3><p>${nome} — ${hora}</p>`;
        document.getElementById("cards-container").appendChild(card);
    }

    document.getElementById("nome").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("modal").style.display = "none";
}