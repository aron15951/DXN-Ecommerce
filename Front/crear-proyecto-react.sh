#!/bin/bash

# Preguntar si desea crear un nuevo directorio
read -p "¿Desea crear un nuevo directorio para el proyecto? (s/n): " crear_dir

if [ "$crear_dir" = "s" ] || [ "$crear_dir" = "S" ]; then
    read -p "Ingrese el nombre del directorio: " nombre_dir
    mkdir "$nombre_dir"
    cd "$nombre_dir"
    echo -e "\nCreando proyecto React con Vite en el nuevo directorio '$nombre_dir'...\n"
    npm create vite@latest . -- --template react
else
    echo -e "\nCreando proyecto React con Vite en el directorio actual...\n"
    npm create vite@latest . -- --template react
fi

# Instalar dependencias básicas
echo -e "\nInstalando dependencias básicas...\n"
npm install
npm install react-router-dom
npm install axios

# Eliminar archivos por defecto
rm src/index.css
rm src/App.css

# Crear estructura básica del router
echo -e "\nCreando estructura básica del router...\n"
mkdir -p src/routes

# Modificar el archivo principal
cat > src/main.jsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
EOF

cat > src/routes/Router.jsx << 'EOF'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
EOF

# Crear componentes de ejemplo
mkdir -p src/components
cat > src/components/Home.jsx << 'EOF'
export default function Home() {
  return <h1>Home Page</h1>;
}
EOF

cat > src/components/About.jsx << 'EOF'
export default function About() {
  return <h1>About Page</h1>;
}
EOF

cat > src/components/NotFound.jsx << 'EOF'
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
EOF

# Verificar si el script dev existe
if npm run | grep -q "dev"; then
    # Iniciar el servidor de desarrollo
    echo -e "\nIniciando servidor de desarrollo...\n"
    npm run dev
else
    echo -e "\nError: El script 'dev' no está definido en package.json"
    echo "Por favor verifique que el proyecto se creó correctamente"
    exit 1
fi
