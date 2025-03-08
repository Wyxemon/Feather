const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  fullscreenWindow: () => ipcRenderer.send('fullscreen-window'),
  closeWindow: () => ipcRenderer.send('close-window'),
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  startDownload: (version, memory) => ipcRenderer.send('start-download', { version, memory })
});
