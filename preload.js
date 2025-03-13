const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  fullscreenWindow: () => ipcRenderer.send('fullscreen-window'),
  closeWindow: () => ipcRenderer.send('close-window'),
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  startDownload: (data) => ipcRenderer.send('start-download', data)
});
