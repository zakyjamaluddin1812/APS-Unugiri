function tambahGuru() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Tambah <span>-</span></h1>
    <dl data-aos="fade" class="row" data-aos-delay="100">
        <dt class="col-sm-3">Nama </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">NIP</dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">Alamat </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>

        <dt class="col-sm-3">TTL </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">NIK </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">No. HP </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">Pelajaran </dt>
        <dd class="col-sm-7 edit" spellcheck="false" contenteditable="true">
            <select id="pilih" class="form-select" aria-label="Default select example">
                <option selected>Pilih Pelajaran</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </dd>
        <dd class="col-sm-1">
            <div class="btn btn-primary rounded" onclick="tambah()" id="rounded"><b>+</b></div>
        </dd>
    </dl>
    <div data-aos="fade" data-aos-delay="100" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-success" onclick="guru()">Tambah</button></a>
    </div>
    
    `;
}

