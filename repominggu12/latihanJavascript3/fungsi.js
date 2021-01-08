var dataBarang = [
    "Penggaris",
    "Penghapus",
    "Spidol"
];

function ShowBarang () {
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = ' ';

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++) {
        var btnEdit = '<a href='#' onclick='editBarang('+i+') '>Edit</a>';
        var btnHapus = "<a href='#'
onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    ShowBarang();
}

function editBarang(id) {
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    ShowBarang();
}

function deleteBarang(id) {
    dataBarang.splice(id,1);
    ShowBarang();
}

ShowBarang();