function detailSantri() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Zaky <span>-</span></h1>
    <dl data-aos="fade" data-aos-delay="100" class="row">
        <dt class="col-sm-3">Nama </dt>
        <dd class="col-sm-9">Zaky Jamaluddin</dd>
        <dt class="col-sm-3">No. Induk</dt>
        <dd class="col-sm-9">2402</dd>
        <dt class="col-sm-3">Alamat </dt>
        <dd class="col-sm-9">Desa Sekaran Kecamatan Balen Kabupaten Bojonegoro</dd>
   
        <dt class="col-sm-3">TTL </dt>
        <dd class="col-sm-9">Bojonegoro, 18 Desember 2000</dd>
        <dt class="col-sm-3">Kelas </dt>
        <dd class="col-sm-9">1 - Wustho</dd>
        <dt class="col-sm-3">NIK </dt>
        <dd class="col-sm-9">3522131812000002</dd>
        <dt class="col-sm-3">Nama Wali </dt>
        <dd class="col-sm-9"> -</dd>
        <dt class="col-sm-3">No. HP Wali </dt>
        <dd class="col-sm-9">085730408541</dd>
    </dl>
    <div data-aos="fade" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-secondary" onclick="ubahSantri()">Ubah</button></a>
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-danger" onclick="santri()">Hapus</button></a>
    </div>`
}