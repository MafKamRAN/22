const input = document.querySelectorAll(".css-controller input");
input.forEach((inputs) => inputs.addEventListener("change", update));
function update() {
  const suffixData = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffixData
  );
}
