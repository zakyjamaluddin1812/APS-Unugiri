function guru() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Ustadz <span>-</span></h1>
    <div data-aos="fade" data-aos-delay="100" class="isi-tabel">
        <table class="table table-hover">
            <thead class="sticky-top table-danger">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                    <th class="kelas" scope="col">Kode</th>
                </tr>
            </thead>

            <tbody>
                <tr onclick="detailGuru()">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td class="kelas">A</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td class="kelas">B</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">C</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td class="kelas">D</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td class="kelas">E</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">6</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">F</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td class="kelas">G</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">8</th>
                    <td>Jacob</td>
                    <td class="kelas">H</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">9</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">I</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">10</th>
                    <td>Mark</td>
                    <td class="kelas">J</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">11</th>
                    <td>Jacob</td>
                    <td class="kelas">K</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">12</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">L</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">13</th>
                    <td>Mark</td>
                    <td class="kelas">M</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">14</th>
                    <td>Jacob</td>
                    <td class="kelas">N</td>
                </tr>
                <tr onclick="detailGuru()">
                    <th scope="row">15</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">O</td>
                </tr>
            </tbody>

        </table>
    </div>
    <div data-aos="fade" class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="admin/home.html"></a><button type="button"
            class="btn btn-outline-success mt-3" onclick="tambahGuru()">Tambah Ustadz</button></a>
    </div>`;
}