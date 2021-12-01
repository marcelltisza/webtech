function AddItemToList() {
    const item = document.getElementById("listItemToAdd").value;
    const list = document.getElementById("list").children;

    if (ListContains(item, list)) {
        alert("item is already in the list");
    }
    else {
        const listItem = document.createElement("li");
        listItem.innerHTML = "<strong>" + item + "</strong>";
        document.getElementById("list").appendChild(listItem);
        alert("item inserted");
    }

}

function ListContains(item, list) {
    for (let i = 0; i < list.length; i++) {
        if (item == list[i].getElementsByTagName("strong")[0].innerText) {
            return true;
        }
    }
    return false;
}