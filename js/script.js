import $initBgUserInputFile from "./modules/bgUserInputFile.js";

$initBgUserInputFile();

const _divAddedItems = document.querySelector(".added-items-container");
const _inputFile = document.querySelector('[data-input="file"]');
const _titleInput = document.querySelector('[data-input="title"]');
const _descriptionInput = document.querySelector('[data-input="desc"]');
const _btnAddInput = document.querySelector('[data-input="btnAdd"]');

_inputFile.addEventListener("change", $readerURL);

function $readerURL(e) {
  const _readerTarget = e.target;
  const _userFile = _readerTarget.files[0];

  if (_userFile) {
    const _reader = new FileReader();

    _reader.onload = (e) => {
      const _readerTarget = e.target;

      const _divIMG = document.createElement("img");
      _divIMG.src = _readerTarget.result;
      _divIMG.classList.add("img--inputed");
      _divIMG.alt = "Image added";
    };

    _reader.readAsDataURL(_userFile);
  }
}

_btnAddInput.addEventListener("click", function (e) {
  e.preventDefault();
  const _IMG = document.querySelector(".img--inputed");
  const _srcIMG = _IMG.src;

  if (
    _titleInput.value.length >= 3 &&
    _descriptionInput.value.length >= 8 &&
    _srcIMG
  ) {
    $divCreate();
    $resetInput();
  }

  function $divCreate() {
    const _contAdded = document.createElement("div");
    _contAdded.classList.add("containerItem");

    _contAdded.innerHTML = `
      <div class="containerItem">
        <div class="img-container">
          <img
            src="${_srcIMG}"
            alt=""
          />
        </div>
        <div class="description-landmark">
          <h2>${_titleInput.value}</h2>
          <p>${_descriptionInput.value}</p>
        </div>
      </div>`;
    _divAddedItems.prepend(_contAdded);
  }

  function $resetInput() {
    const _labelInputFile = document.querySelector('[data-input="label"]');

    _titleInput.value = "";
    _descriptionInput.value = "";
    _labelInputFile.removeChild(_IMG);
    _labelInputFile.classList.remove("active");
    _labelInputFile.innerText = "Imagem";
  }
});
