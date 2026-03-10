git checkout -b feature/tailwind-ui-kit
git add vite.config.ts package.json src/index.css
git commit -m "feat: install and configure Tailwind CSS v4"
git add src/components/Button.tsx
git commit -m "feat: add Button component with variants"
git add src/components/Input.tsx
git commit -m "feat: add Input component with error state"
git add src/components/Card.tsx src/components/Alert.tsx
git commit -m "feat: add Card and Alert components"
git add src/App.tsx
git commit -m "feat: migrate portfolio to Tailwind CSS"
git add src/pages/UIKit.tsx
git commit -m "feat: add UI Kit page with 8+ variants"
git add .
git commit -m "feat: add dark mode support and finalize"
git push -u origin feature/tailwind-ui-kit
