# PaxAuroraTheme

A stunning VSCode theme featuring animated gradients, custom video backgrounds, and a refined dark color palette inspired by deep space aesthetics.

![PaxAuroraTheme Banner](./assets/icon.png)

## ✨ Features

- **Animated Gradient Search Bar** - A mesmerizing flowing gradient in the command center
- **Custom Video Background** - Beautiful video animation on empty editor screens
- **Gradient Scrollbars** - Vibrant multi-color scrollbars with smooth gradients
- **Gradient Activity Bar** - Selected icons feature eye-catching red-to-blue gradients
- **Custom Notification Styling** - Unified gradient backgrounds across all notifications
- **Pax Aurora Color Theme** - Carefully crafted syntax highlighting with:
  - Functions: `#F29D79`
  - Types: `#81CFE0`
  - Keywords: `#B38CFF`
  - Variables: `#DED47E`
  - Constants: `#80BBFF`
  - Strings: `#82D99F`
- **Pax Aurora Icons** - Beautiful file icons for better visual navigation
- **Rounded Corners** - Smooth, modern UI with consistent rounded corners
- **No Shadows** - Clean, flat design without distracting shadow effects
- **No Focus Borders** - Invisible focus indicators for a seamless experience

## 🚀 Installation

### From VSIX File

1. Download `paxauroratheme-1.0.0.vsix`
2. Open VSCode
3. Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
4. Type: `Extensions: Install from VSIX...`
5. Select the downloaded VSIX file
6. Click **Install**

### First Time Setup

After installation, the theme will automatically:
- Apply the Pax Aurora color theme
- Apply the Pax Aurora Icons
- Inject custom CSS styling

A notification will appear asking you to restart VSCode. Click **Restart Now**.

## 🎨 Usage

### Apply Styles

If you need to reapply the custom styling:

1. Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
2. Type: `PaxAuroraTheme: Apply Styles`
3. Restart VSCode when prompted

### Remove Styles

To remove custom styling and return to default VSCode:

1. Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
2. Type: `PaxAuroraTheme: Remove Styles`
3. Restart VSCode when prompted

## ⚙️ Configuration

### Disable Auto-Apply Theme

If you want to use your own color theme instead of Pax Aurora:

1. Open VSCode Settings (`Cmd+,` or `Ctrl+,`)
2. Search for: `paxauroratheme`
3. Uncheck **Auto Apply Theme**

### Customize Spacing

Adjust UI spacing to your preference:

1. Open Settings
2. Search for: `vscode-modernized.ui.spacing`
3. Enter a CSS value (e.g., `0.5rem`, `8px`)

## 🎥 Video Background

The theme includes a custom video background that plays on empty editor screens. The video is displayed at full opacity and automatically loops.

To replace with your own video:
1. Place an MP4 file in the extension's `assets` folder
2. Name it `vscode3.mp4` (or update the path in `styles/backgroundVideo.js`)

## 🎭 What Makes This Theme Special

PaxAuroraTheme goes beyond traditional VSCode themes by injecting custom CSS and JavaScript to transform the entire editor experience:

- **Dynamic Animations** - Flowing gradients that bring your editor to life
- **Video Backgrounds** - Immersive coding environment with video playback
- **Unified Design Language** - Every element styled cohesively
- **Performance Optimized** - Smooth animations without lag
- **Modern Aesthetic** - Clean, professional look for 2025

## 🛠️ Technical Details

This extension modifies VSCode's `workbench.html` file to inject custom CSS and JavaScript. The modifications are:
- Fully reversible using the "Remove Styles" command
- Applied only to your local installation
- Safe and do not affect VSCode's core functionality

## 📝 License & Attribution

PaxAuroraTheme is built upon and extends:
- **VS Code Modernized** by Sukarth - [MIT License](https://github.com/Sukarth/VS-Code-Modernized)
- **Seti UI Icons** - File icon theme

### MIT License

Copyright (c) 2025 Maks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🐛 Known Issues

- On first install, you may need to run "Apply Styles" twice if the theme doesn't appear immediately
- Video background requires VSCode restart to take effect
- Custom CSS modifications may show a warning in VSCode - this is expected and safe to ignore

## 🤝 Contributing

This is a personal theme project. Feel free to fork and customize for your own use!

## 📧 Support

If you encounter issues:
1. Try running "Remove Styles" then "Apply Styles" again
2. Restart VSCode completely
3. Check that you have write permissions to VSCode's installation directory

## 🌟 Enjoy!

Happy coding with PaxAuroraTheme! May your editor be as beautiful as your code.

---

**Version:** 1.0.0
**Publisher:** maks
**Last Updated:** 2025
