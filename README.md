# Feather - The Most Secure Minecraft Launcher

Feather is an open-source Minecraft Launcher built with JavaScript (Electron). Designed with security in mind, it provides a seamless and safe experience for launching Minecraft.

![Feather Launcher](welcome/resources/image.png)

## 📥 Download
Choose your operating system to download Feather:

- [Download for macOS](#)
- [Download for Windows](#)
- [Download for Linux](#)

---

## 🚀 How to Run
Follow these steps to set up and run Feather on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/Feather.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Feather
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm run dev
   ```

---

## 🛠️ How to Build
Feather uses [`electron-packager`](https://www.npmjs.com/package/electron-packager) to package the application. Install it globally if you haven't:

```bash
npm i -g electron-packager
```

Then, use the following commands to build for your desired platform:

### 🏁 Windows
```bash
npx electron-packager . Feather --platform=win32 --arch=x64 --out=build --icon=icon.png
```

### 🍏 macOS
```bash
npx electron-packager . Feather --platform=darwin --arch=x64 --out=build --icon=icon.png
```

### 🐧 Linux
```bash
npx electron-packager . Feather --platform=linux --arch=x64 --out=build --icon=icon.png
```

---

## 📜 License
Feather is open-source and distributed under the [MIT License](LICENSE).

---

## 🌍 Contribute
We welcome contributions! Feel free to submit issues or pull requests.

🔗 [GitHub Repository](https://github.com/your-repo/Feather)
