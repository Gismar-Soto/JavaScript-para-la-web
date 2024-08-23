document.addEventListener("DOMContentLoaded", () => {
  const stickers = Array.from(document.querySelectorAll("[id^='sticker']"));
  const verificarButton = document.getElementById("verificar");
  const resultado = document.getElementById("resultado");

  verificarButton.addEventListener("click", () => {
    const total = stickers.reduce((sum, sticker) => {
      const value = parseInt(sticker.value, 10);
      return sum + (isNaN(value) ? 0 : value);
    }, 0);

    resultado.textContent = total <= 10
      ? `Llevas ${total} stickers`
      : "¡Vaya! Parece que hay demasiados stickers aquí.";
  });
});
function goToHome() {
  window.location.href = "index.html";
}