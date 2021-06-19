import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import pageNotFound from './pages/404page';

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

        // menambahkan halaman 404 not found untuk URL halaman yang tidak terdaftar
        if (!page) {
            this._content.innerHTML = await pageNotFound.render();
            await pageNotFound.afterRender();
        } else {
            this._content.innerHTML = await page.render();
            await page.afterRender();
        }
    }
}

export default App;
