const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let rows = document.querySelectorAll("#motorTable tbody tr");

rows.forEach(row => {

let text = row.innerText.toLowerCase();

if(text.includes(filter)){
row.style.display = "";
}else{
row.style.display = "none";
}

});

});