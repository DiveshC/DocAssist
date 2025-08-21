import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let window;
const createWindow = () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, "preload.js"),
        },
    });
    window.loadFile(join(__dirname, '../index.html'));
};
app.whenReady().then(() => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
app.on("activate", () => {
    if (window === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map