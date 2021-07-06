function ubahGuru() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Zaky <span>-</span></h1>
    <dl data-aos="fade" class="row" data-aos-delay="100">
        <dt class="col-sm-3">Nama </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">Zaky Jamaluddin, S.Kom</dd>
        <dt class="col-sm-3">NIP</dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">240273193736</dd>
        <dt class="col-sm-3">Alamat </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">Desa Sekaran Kecamatan Balen Kabupaten Bojonegoro</dd>
   
        <dt class="col-sm-3">TTL </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">Bojonegoro, 18 Desember 2000</dd>
        <dt class="col-sm-3">NIK </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">3522131812000002</dd>
        <dt class="col-sm-3">No. HP </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">085730408541</dd>
        <dt class="col-sm-3">Pelajaran </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">
            1. Aqidatul Awam   <br>
            2. Safinatun Najah  <br>
            3. Imrithi 
        </dd>
    </dl>
    <div data-aos="fade" data-aos-delay="100" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-secondary" onclick="detailGuru()">Simpan</button>
    </div>`;
}