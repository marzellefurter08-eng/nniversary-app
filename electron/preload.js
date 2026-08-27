const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // Add any API methods here if needed
  platform: process.platform,
  version: process.version,
})
