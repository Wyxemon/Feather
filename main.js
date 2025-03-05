const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs').promises;
const path = require('path');

const configPath = path.join(__dirname, 'config.json');

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 580,
    icon: 'icon.png',
    name: 'Feather',
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.setMenu(null);

  const data = await fs.readFile(configPath, 'utf8');
  const config = JSON.parse(data);

  const loadPath = config.firstTime === 1 ? 'welcome/welcome/index.html' : 'src/index.html';
  win.loadFile(loadPath);
  
  if (config.firstTime === 1) {
    config.firstTime = 0;
    await fs.writeFile(configPath, JSON.stringify(config));
  }

  ipcMain.on('fullscreen-window', () => {
    win.setFullScreen(!win.isFullScreen());
  });

  ipcMain.on('close-window', () => {
    win.close();
  });

  ipcMain.on('minimize-window', () => {
    win.minimize();
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});