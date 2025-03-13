document.getElementById("questionForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const question = document.getElementById("question").value;

    const data = { name, question };

    try {
        const response = await fetch("https://your-backend-url.com/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Pertanyaan berhasil dikirim!");
        } else {
            alert("Gagal mengirim pertanyaan.");
        }
    } catch (error) {
        alert("Terjadi kesalahan: " + error.message);
    }
});
