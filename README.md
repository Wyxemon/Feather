# Feather
The most secure Minecraft Launcher. Open Source Minecraft Launcher built in JavaScript (Electron).

![Alt text](welcome/resources/image.png)

## Download
- [Download for Mac OS](#)
- [Download for Windows](#)
- [Download for Linux](#)

## How to run
To get started, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project folder.
3. Install dependencies by running:
   ```bash
   npm install
4. Run the proyect:
   ```bash
   npm run dev

## How to build
Using electron-packager npm i electron-packager https://www.npmjs.com/package/electron-packager
1. Build for Windows.
   ```bash
   npx electron-packager . Feather --platform=win32 --arch=x64 --out=build --icon=icon.png
2. Build for MacOs.
   ```bash
   npx electron-packager . Feather --platform=darwin --arch=x64 --out=build --icon=icon.png
3. Build for Linux.
   ```bash
   npx electron-packager . Feather --platform=linux --arch=x64 --out=build --icon=icon.png
