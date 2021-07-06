function raport() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Raport <span>-</span></h1>
    <div class="row" data-aos="fade" data-aos-delay="100">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Kelas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div class="col-4">
            <select class="form-select" aria-label="Default select example">
                <option selected>Pelajaran</option>
                <option value="1">Aqidatul A</option>
                <option value="2">Safinatun N</option>
                <option value="3">Nahwu</option>
            </select>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col" class="aksi3">Nilai</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Zaky Jamaluddin</td>
                <td class="aksi3">
                    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp"></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jamaluddin</td>
                <td class="aksi3">
                    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp"></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Zaky</td>
                <td class="aksi3">
                    <input type="text" autocomplete="off" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp"></td>
            </tr>
        </tbody>
    </table>
    <div class="btn btn-success">Kirim</div>`;
}