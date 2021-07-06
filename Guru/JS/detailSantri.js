function detailSantri() {

    const isi = document.querySelector(".isi");
    isi.innerHTML = `<h1 data-aos="fade"><span>-</span> Zaky <span>-</span></h1>
    <div class="container-fluid" data-aos="fade" data-aos-delay="100">
        <div class="row">
            <div class="col-md-12">
                <canvas id="myChart" width="200" height="200"></canvas>
            </div>
        </div>
    </div>`;

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Kls-1 (1)", "Kls-1 (2)", "Kls-2 (1)", "Kls-2 (2)"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 10, 5],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}