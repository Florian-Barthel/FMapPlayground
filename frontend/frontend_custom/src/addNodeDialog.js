const addNodeDialog = document.querySelector("#addNodeDialog");
const cancelButton = addNodeDialog.querySelector(".cancel");

const kindSelect = addNodeDialog.querySelector(".module-kind");
moduleList.forEach((config) => {
  const option = document.createElement("option");
  option.innerText = config.kind;
  option.value = config.kind;
  kindSelect.appendChild(option);
});

// TODO: register outside click
cancelButton.addEventListener("click", () => {
  addNodeDialog.close();
});

export function showAddNodeDialog() {
  addNodeDialog.showModal();
}

export function registerSubmitCallback() {
  addNodeDialog.addEventListener("submit", (evt) => {
    let data = { kind: "", name: "" };
    for (const [key, value] of new FormData(
      evt.target
    ).entries()) {
      if (key === "module-kind") {
        data["kind"] = value;
      } else if (key === "module-name") {
        data["name"] = value;
      }
    }
    callback(data);
  });
}
