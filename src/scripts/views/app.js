import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });

        // kita bisa menginisiasikan komponen lain bila ada
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];

        const winUrl = window.location.hash;
        const notFound = `<h1> Halaman Tidak Ditemukan </h1>`;
        if (winUrl === 'aaa') {
            this._content.innerHTML = await notFound.render();
            await notFound.afterRender();
        }
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
