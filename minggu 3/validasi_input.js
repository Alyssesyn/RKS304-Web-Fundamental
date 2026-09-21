document.getElementById('formRegister').addEventListener('submit', function(e) {
    let isValid = true;

    // Ambil semua elemen input
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const nama = document.getElementById('nama');
    const tglLahir = document.getElementById('tglLahir');
    const alamat = document.getElementById('alamat');
    const noTelp = document.getElementById('noTelp');

    // Fungsi helper untuk menampilkan/menyembunyikan pesan error
    function checkValid(input, errId, condition, message) {
        const errEl = document.getElementById(errId);
        if (condition) {
            errEl.textContent = message;
            errEl.classList.remove('hidden');
            isValid = false;
        } else {
            errEl.classList.add('hidden');
        }
    }

    // 1. Validasi Username (tidak boleh kosong & min 3 karakter)
    checkValid(username, 'errUsername', username.value.trim() === '' || username.value.length < 3, 'Username wajib diisi (min. 3 karakter)');

    // 2. Validasi Password (tidak boleh kosong & min 8 karakter)
    checkValid(password, 'errPassword', password.value === '' || password.value.length < 8, 'Password wajib diisi (min. 8 karakter)');

    // 3. Validasi Nama (tidak boleh kosong)
    checkValid(nama, 'errNama', nama.value.trim() === '', 'Nama wajib diisi');

    // 4. Validasi Tanggal Lahir (tidak boleh kosong & tidak boleh masa depan)
    const today = new Date().toISOString().split('T')[0];
    checkValid(tglLahir, 'errTglLahir', !tglLahir.value || tglLahir.value > today, 'Tanggal lahir wajib diisi & tidak boleh masa depan');

    // 5. Validasi Alamat (tidak boleh kosong)
    checkValid(alamat, 'errAlamat', alamat.value.trim() === '', 'Alamat wajib diisi');

    // 6. Validasi No Telepon (tidak boleh kosong & harus diawali '62')
    checkValid(noTelp, 'errNoTelp', noTelp.value.trim() === '' || !noTelp.value.startsWith('62'), 'Nomor telepon wajib diisi dan diawali kode 62');

    // Jika ada yang salah/invalid, hentikan pengiriman form
    if (!isValid) {
        e.preventDefault();
    }
});