const { app, BrowserWindow } = require('electron');
const fs = require('fs').promises;
const path = require('path');

const configPath = path.join(__dirname, 'config.json');

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 900,
    height: 580,
    icon: 'icon.png',
    name: 'Feather',
  });

  win.setMenu(null);

  const data = await fs.readFile(configPath, 'utf8');
  const config = JSON.parse(data);

  const loadPath = config.firstTime === 1 ? 'public/start/index.html' : 'src/index.html';
  win.loadFile(loadPath);
  
  if (config.firstTime === 1) {
    config.firstTime = 0;
    await fs.writeFile(configPath, JSON.stringify(config));
  }
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});