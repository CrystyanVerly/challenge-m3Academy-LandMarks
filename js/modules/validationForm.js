export default function $initValidateForm() {
  const _inputFile = document.forms[0].elements[0];
  const _inputTitle = document.forms[0].elements[1];
  const _inputTxtArea = document.forms[0].elements[2];
  const _labelCaracter = document.querySelectorAll(".count-caracter");
  const _inputs = [_inputFile, _inputTitle, _inputTxtArea];

  function innerLabelCaracter() {
    _inputTitle.addEventListener("input", () => {
      const _countLetter = _inputTitle.value.length;

      _countLetter < 3
        ? (_labelCaracter[0].style.color = "#ff5a5f")
        : (_labelCaracter[0].style.color = "#858585");

      _labelCaracter[0].innerText = `${_countLetter} / 30`;
    });
    _inputTxtArea.addEventListener("input", () => {
      const _countLetter = _inputTxtArea.value.length;
      _countLetter < 8
        ? (_labelCaracter[1].style.color = "#ff5a5f")
        : (_labelCaracter[1].style.color = "#858585");

      _labelCaracter[1].innerText = `${_countLetter} / 125`;
    });
  }
  innerLabelCaracter();

  function handleValidation(event) {
    const _target = event.target;

    if (!_target.checkValidity()) {
      _target.classList.add("invalid");
      _target.style.color = "#ff5a5f";
    } else {
      _target.classList.remove("invalid");
      _target.style.color = "#858585";
    }
  }

  _inputs.forEach((input) => {
    input.addEventListener("change", handleValidation);
  });
}
