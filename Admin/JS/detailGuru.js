function detailGuru() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Zaky <span>-</span></h1>
    <dl data-aos="fade" data-aos-delay="100" class="row">
        <dt class="col-sm-3">Nama </dt>
        <dd class="col-sm-9">Zaky Jamaluddin, S.Kom</dd>
        <dt class="col-sm-3">NIP</dt>
        <dd class="col-sm-9">240273193736</dd>
        <dt class="col-sm-3">Alamat </dt>
        <dd class="col-sm-9">Desa Sekaran Kecamatan Balen Kabupaten Bojonegoro</dd>
   
        <dt class="col-sm-3">TTL </dt>
        <dd class="col-sm-9">Bojonegoro, 18 Desember 2000</dd>
        <dt class="col-sm-3">NIK </dt>
        <dd class="col-sm-9">3522131812000002</dd>
        <dt class="col-sm-3">No. HP </dt>
        <dd class="col-sm-9">085730408541</dd>
        <dt class="col-sm-3">Pelajaran </dt>
        <dd class="col-sm-9">
            1. Aqidatul Awam   <br>
            2. Safinatun Najah  <br>
            3. Imrithi 
        </dd>
    </dl>
    <div data-aos="fade" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-secondary" onclick="ubahGuru()">Ubah</button></a>
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-danger" onclick="guru()">Hapus</button></a>
    </div>`;
}