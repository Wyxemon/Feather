const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs').promises;
const path = require('path');
const { fork } = require('child_process');

const configPath = path.join(__dirname, 'config.json');

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 580,
    icon: 'icon.png',
    name: 'Feather',
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
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

  ipcMain.on('start-download', (event, { version, memory, user }) => {
    console.log('start-download received with:', version, 'memory:', memory, 'user:', user);
    const subprocess = fork(path.join(__dirname, 'dowloader.js'), [version, memory, user]);

    subprocess.on('message', (message) => {
        console.log('Message from subprocess:', message);
    });

    subprocess.on('error', (error) => {
        console.error('Subprocess error:', error);
    });

    subprocess.on('exit', (code) => {
        console.log('Subprocess exited with code:', code);
    });

    console.log('Subprocess started with command:', `node dowloader.js ${version} ${memory} ${user}`);
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});