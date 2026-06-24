const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

const keyword = searchInput.value.toLowerCase();

const rows =
document.querySelectorAll("#motorTable tbody tr");

rows.forEach(row => {

const text = row.innerText.toLowerCase();

if(text.includes(keyword)){
row.style.display = "";
}
else{
row.style.display = "none";
}

});

});

function sortHarga(){

const tbody =
document.querySelector("#motorTable tbody");

const rows =
Array.from(tbody.querySelectorAll("tr"));

rows.sort((a,b)=>{

const hargaA =
parseInt(
a.children[2].dataset.harga
);

const hargaB =
parseInt(
b.children[2].dataset.harga
);

return hargaA - hargaB;

});

tbody.innerHTML="";

rows.forEach(row=>{
tbody.appendChild(row);
});

}