const pageNotFound = {
  async render() {
    return `
    <div class="NotfoundWrap">
      <div class="container">
        <h1>404</h1>
        <h2>Maaf, Halaman yang anda minta tidak ditemukan!</h2>
        <a href="/">kembali ke halaman utama</a>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const err = document.querySelector('.error');

    err.innerHTML = "<p>silahkan kembali ke halaman utama</p>";
  },
};

export default pageNotFound;
