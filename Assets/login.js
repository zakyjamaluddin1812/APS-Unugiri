function login() {
    const sandi = document.querySelector("#sandi").value;
    if (sandi == "admin") {
        window.location.replace("D:/UNUGIRI/TugasAkhirAnalisisDanPerancanganSistem/Admin/admin.html")
    } else if (sandi == "santri") {
        window.location.replace("D:/UNUGIRI/TugasAkhirAnalisisDanPerancanganSistem/Santri/santri.html")
    } else if (sandi == "ustadz") {
        window.location.replace("D:/UNUGIRI/TugasAkhirAnalisisDanPerancanganSistem/Guru/guru.html")
    } else {
        const alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        function tambah() {
            sandi.insertAdjacentHTML('afterend', alert)
        }
        tambah();
    }
}