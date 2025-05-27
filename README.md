# 3D Badge Card Portfolio

A modern 3D portfolio website built with Next.js and Three.js, featuring interactive 3D badge cards with physics simulation.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers and abstractions
- **React Three Rapier** - Physics engine integration
- **Leva** - GUI controls for real-time tweaking
- **Tailwind CSS** - Utility-first CSS framework

## ✨ Features

- 🎮 Interactive 3D scene with orbit controls
- 🎯 Physics simulation with falling objects
- 🎨 Animated 3D badge cards with hover effects
- ⭐ Starfield background
- 🌈 Animated lines with custom line rendering
- 🎛️ Real-time GUI controls with Leva
- 📱 Responsive design
- 🎭 Smooth animations and transitions

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-badge-card
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

- **Drag** to rotate the camera around the scene
- **Scroll** to zoom in and out
- **Hover** over badge cards to see interactive effects
- **Use Leva controls** (top-right panel) to tweak scene parameters in real-time
- Watch the physics simulation with falling objects

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── Scene3D.tsx         # Main 3D scene
    ├── BadgeCard.tsx       # Interactive 3D badge cards
    ├── AnimatedLines.tsx   # Animated line effects
    └── LevaControls.tsx    # Real-time GUI controls
```

## 🎨 Customization

### Adding New Badge Cards

Edit `src/components/Scene3D.tsx` and add new `BadgeCard` components:

```tsx
<BadgeCard 
  title="Your Title" 
  subtitle="Your Subtitle" 
  position={[x, y, z]} 
/>
```

### Modifying Colors and Materials

Update the materials in the components:
- `BadgeCard.tsx` - Card colors and effects
- `Scene3D.tsx` - Lighting and background
- `AnimatedLines.tsx` - Line colors and animations
- `LevaControls.tsx` - Controllable object properties

### Using Leva Controls

The Leva panel (top-right) provides real-time control over:
- **Position** - X, Y, Z coordinates of the controllable object
- **Rotation** - Rotation angles around each axis
- **Scale** - Size multiplier
- **Color** - Material color picker
- **Wireframe** - Toggle wireframe mode
- **Metalness** - Material metallic property
- **Roughness** - Material surface roughness
- **Animation Speed** - Rotation animation speed
- **Shape** - Switch between box and sphere

## 🚀 Deployment

Build the project for production:

```bash
npm run build
npm start
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!
