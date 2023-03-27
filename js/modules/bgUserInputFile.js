export default function $initBgUserInputFile() {
  const _inputFile = document.querySelector('[data-input="file"]');
  const _labelInputFile = document.querySelector('[data-input="label"]');
  _labelInputFile.innerText = "Imagem";

  if (_inputFile && _labelInputFile) {
    _inputFile.addEventListener("change", $previewIMG);

    function $previewIMG(e) {
      const _inputTarget = e.target;
      const _userFile = _inputTarget.files[0];

      if (_userFile) {
        const _reader = new FileReader();
        _reader.addEventListener("load", $setIMG);

        function $setIMG(e) {
          const _readerTarget = e.target;

          const _imgCreated = document.createElement("img");
          _imgCreated.src = _readerTarget.result;
          _imgCreated.classList.add("img--inputed");

          _labelInputFile.innerText = "";

          _labelInputFile.classList.add("active");
          _labelInputFile.appendChild(_imgCreated);
        }
        _reader.readAsDataURL(_userFile);
      }
    }
  }
}
