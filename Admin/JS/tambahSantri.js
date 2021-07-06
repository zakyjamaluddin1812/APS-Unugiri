function tambahSantri() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Tambah <span>-</span></h1>
    <dl data-aos="fade" class="row" data-aos-delay="100">
        <dt class="col-sm-3">Nama </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">No. Induk</dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">Alamat </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
   
        <dt class="col-sm-3">TTL </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">Kelas </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">NIK </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">Nama Wali </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
        <dt class="col-sm-3">No. HP Wali </dt>
        <dd class="col-sm-9 edit" spellcheck="false" contenteditable="true">: </dd>
    </dl>
    <div data-aos="fade" data-aos-delay="100" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-success" onclick="santri()">Tambah</button></a>
    </div>`;
}