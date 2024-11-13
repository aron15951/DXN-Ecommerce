#!/bin/bash

# Función para mostrar mensajes en color
function echo_info {
    echo -e "\033[1;34m$1\033[0m"
}

function echo_success {
    echo -e "\033[1;32m$1\033[0m"
}

function echo_error {
    echo -e "\033[1;31m$1\033[0m"
}

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null
then
    echo_error "Node.js no está instalado. Por favor, instálalo desde https://nodejs.org/ y vuelve a intentarlo."
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null
then
    echo_error "npm no está instalado. Asegúrate de tener npm instalado junto con Node.js."
    exit 1
fi

echo_info "Bienvenido al generador de proyectos React."

# Preguntar por el nombre del proyecto
read -p "Ingrese el nombre del proyecto: " project_name

# Preguntar por el uso de TypeScript o JavaScript
echo "Selecciona el tipo de proyecto:"
echo "1) JavaScript"
echo "2) TypeScript"
read -p "Ingresa 1 o 2: " project_type

if [[ "$project_type" == "1" ]]; then
    use_typescript=false
    echo_info "Has seleccionado JavaScript."
elif [[ "$project_type" == "2" ]]; then
    use_typescript=true
    echo_info "Has seleccionado TypeScript."
else
    echo_error "Selección inválida. Saliendo."
    exit 1
fi

# Crear el proyecto usando Create React App
if [ "$use_typescript" = true ]; then
    echo_info "Creando el proyecto React con TypeScript..."
    npx create-react-app "$project_name" --template typescript
else
    echo_info "Creando el proyecto React con JavaScript..."
    npx create-react-app "$project_name"
fi

if [ $? -ne 0 ]; then
    echo_error "Error al crear el proyecto con Create React App."
    exit 1
fi

cd "$project_name" || { echo_error "No se pudo acceder al directorio $project_name"; exit 1; }

# Instalar Tailwind CSS
echo_info "Instalando Tailwind CSS..."

# Instalar dependencias de Tailwind
npm install -D tailwindcss postcss autoprefixer

# Inicializar Tailwind
npx tailwindcss init -p

# Configurar Tailwind en los archivos de configuración
if [ "$use_typescript" = true ]; then
    # Para TypeScript
    tailwind_config="tailwind.config.js"
    src_index_file="src/index.tsx"
else
    # Para JavaScript
    tailwind_config="tailwind.config.js"
    src_index_file="src/index.js"
fi

# Configurar el contenido de Tailwind
cat > "$tailwind_config" <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Añadir las directivas de Tailwind a CSS
css_file="src/index.css"
cat > "$css_file" <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Reemplazar el archivo de entrada para incluir Tailwind
if [ "$use_typescript" = true ]; then
    # TypeScript
    cat > "$src_index_file" <<EOL
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
EOL
else
    # JavaScript
    cat > "$src_index_file" <<EOL
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </React.StrictMode>
  </React.StrictMode>
);
EOL
fi

# Instalar React Router
echo_info "Instalando React Router..."
npm install react-router-dom

if [ $? -ne 0 ]; then
    echo_error "Error al instalar React Router."
    exit 1
fi

# Configurar App.js o App.tsx con React Router
if [ "$use_typescript" = true ]; then
    app_file="src/App.tsx"
    cat > "$app_file" <<EOL
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h2 className="text-2xl">Inicio</h2>;
}

function About() {
    return <h2 className="text-2xl">Acerca de</h2>;
}

function App() {
    return (
        <div className="p-4">
            <nav className="mb-4">
                <Link to="/" className="mr-4 text-blue-500">Inicio</Link>
                <Link to="/about" className="text-blue-500">Acerca de</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
EOL
else
    app_file="src/App.js"
    cat > "$app_file" <<EOL
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h2 className="text-2xl">Inicio</h2>;
}

function About() {
    return <h2 className="text-2xl">Acerca de</h2>;
}

function App() {
    return (
        <div className="p-4">
            <nav className="mb-4">
                <Link to="/" className="mr-4 text-blue-500">Inicio</Link>
                <Link to="/about" className="text-blue-500">Acerca de</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
EOL
fi

# Limpiar la consola
clear

echo_success "¡Proyecto React '$project_name' creado exitosamente!"
echo_info "Para comenzar:"
echo "  cd $project_name"
echo "  npm start"

