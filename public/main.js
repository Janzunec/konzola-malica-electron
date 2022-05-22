const { app, BrowserWindow } = require('electron');

require('@electron/remote/main').initialize();

const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
	const win = new BrowserWindow({
		width: 1920,
		height: 1080,
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#343e4e',
			symbolColor: '#bbb',
		},
		webPreferences: {
			enableRemoteModule: true,
			nodeIntegration: true,
		},
		icon: __dirname + '/console.png',
	});

	win.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	);

	// win.setIcon('public/console.png');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
