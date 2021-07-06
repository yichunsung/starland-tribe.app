import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow = null;

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // darwin = MacOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

function createWindow(): void {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      contextIsolation: true
    },
    maximizable: true
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../dist/starland-tribe/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open DevTools.
  // win.webContents.openDevTools()

  // When Window Close.
  win.on('closed', () => {
    win = null
  });
}
