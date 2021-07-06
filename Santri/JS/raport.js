function raport() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1  data-aos="fade"><span>-</span> Raport <span>-</span></h1>
    <table class="table" data-aos="fade" data-aos-delay="100">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Pelajaran</th>
                <th scope="col" class="aksi2">Nilai</th>
                <th scope="col" class="aksi3">Rata <sup>2</sup></th>
                <th scope="col" class="aksi2">KKM</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Aqidatul Awam</td>
                <td class="aksi2">70</td>
                <td class="aksi3">62</td>
                <td class="aksi2">65</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Safinatun Najah</td>
                <td class="aksi2">80</td>
                <td class="aksi3">70</td>
                <td class="aksi2">65</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Nahwu</td>
                <td class="aksi2">90</td>
                <td class="aksi3">55</td>
                <td class="aksi2">65</td>
            </tr>
            <tr>
                <th scope="row" colspan="2">Rata - rata</th>
                <td class="aksi2">70</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th scope="row" colspan="2">Jumlah</th>
                <td class="aksi2">1247</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th scope="row" colspan="2">Peringkat</th>
                <td class="aksi2">2</td>
                <td class="aksi3">dari</td>
                <td class="aksi2">12</td>
            </tr>
            
        </tbody>
    </table>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center" data-aos="fade">
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-primary">S-1</button></a>
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-primary">S-2</button></a>
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-warning">S-1</button></a>
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-warning">S-2</button></a>
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-success">S-1</button></a>
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-success">S-2</button></a>
    </div>`;
}