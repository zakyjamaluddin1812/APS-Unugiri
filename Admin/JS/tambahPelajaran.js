

function tambah() {
    const element = document.getElementById("pilih");
    const newElement =
        `<select class="form-select mt-1" aria-label="Default select example">
<option selected>Pilih Pelajaran</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>`
    element.insertAdjacentHTML('afterend', newElement)
}