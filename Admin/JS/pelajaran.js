function pelajaran() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Pelajaran <span>-</span></h1>
    <div data-aos="fade" data-aos-delay="100">
        <table class="table table-hover">
            <thead class="sticky-top table-danger">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pelajaran</th>
                    <th scope="col">kelas</th>
                    <th scope="col" class="aksi">Aksi</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td class="pel edit">Aqidatul Awam</td>
                    <td class="kel edit">1 - Wustho</td>
                    <td class="eks">
                        <div class="badge bg-warning" onclick="ubah()">ubah</div>
                        <div class="badge bg-danger">hapus</div>
                    </td>
                    <td class="save d-none">
                        <div class="badge bg-success" onclick="save_0()">simpan</div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td class="pel1 edit">Safinatun Najah</td>
                    <td class="kel1 edit">1 - Wustho</td>
                    <td class="eks1">
                        <div class="badge bg-warning" onclick="ubah1()">ubah</div>
                        <div class="badge bg-danger">hapus</div>
                    </td>
                    <td class="save1 d-none">
                        <div class="badge bg-success" onclick="save_1()">simpan</div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td class="pel2 edit">Nahwu</td>
                    <td class="kel2 edit">1 - Wustho</td>
                    <td class="eks2">
                        <div class="badge bg-warning" onclick="ubah2()">ubah</div>
                        <div class="badge bg-danger">hapus</div>
                    </td>
                    <td class="save2 d-none">
                        <div class="badge bg-success" onclick="save_2()">simpan</div>
                    </td>
                </tr>
                
            </tbody>

        </table>
        <h1 data-aos="fade"><span>-</span> Tambah <span>-</span></h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Kelas</button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">1 - Wustho</a></li>
                            <li><a class="dropdown-item" href="#">2 - Wustho</a></li>
                            <li><a class="dropdown-item" href="#">3 - Wustho</a></li>
                            
                        </ul>
                    </div>
                    <div class="btn btn-primary">Tambah</div>
    </div>
    `;
}