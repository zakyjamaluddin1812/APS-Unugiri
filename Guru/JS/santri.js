function santri() {
    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Santri <span>-</span></h1>
    <div class="isi-tabel"  data-aos="fade" data-aos-delay="100">
        <table class="table table-hover">
            <thead class="sticky-top table-danger">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                    <th class="kelas" scope="col">Kelas</th>
                </tr>
            </thead>

            <tbody>
                <tr onclick="detailSantri()">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td class="kelas">1</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td class="kelas">2</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">3</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td class="kelas">1</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td class="kelas">2</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">6</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">3</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td class="kelas">1</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">8</th>
                    <td>Jacob</td>
                    <td class="kelas">2</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">9</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">3</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">10</th>
                    <td>Mark</td>
                    <td class="kelas">1</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">11</th>
                    <td>Jacob</td>
                    <td class="kelas">2</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">12</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">3</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">13</th>
                    <td>Mark</td>
                    <td class="kelas">1</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">14</th>
                    <td>Jacob</td>
                    <td class="kelas">2</td>
                </tr>
                <tr onclick="detailSantri()">
                    <th scope="row">15</th>
                    <td>Larry the Bird</td>
                    <td class="kelas">3</td>
                </tr>
            </tbody>

        </table>
    </div>`;
}