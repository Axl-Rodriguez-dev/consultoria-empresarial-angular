# Consultoría Empresarial — Angular

Aplicación web desarrollada con **Angular 21** para una empresa de consultoría. Incluye catálogo de servicios, detalle de servicio, formulario de contacto y página informativa.

---

## Requisitos previos

- Node.js >= 18
- npm >= 9
- Angular CLI >= 21 (`npm install -g @angular/cli`)

---

## Instalación y arranque

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm start
```

La app queda disponible en `http://localhost:4200/`. Recarga automáticamente al guardar cambios.

### Otros comandos

| Comando | Descripción |
|---|---|
| `npm run build` | Compila para producción (salida en `dist/`) |
| `npm run watch` | Compila en modo watch (desarrollo) |

---

## Estructura de carpetas

```
consultoria-empresarial-angular/
├── public/
│   ├── data/
│   │   ├── services.json        # Datos de servicios (nombre, descripción, hero, etc.)
│   │   └── contact.json         # Datos de contacto
│   └── src/
│       ├── company.png
│       ├── integral.jpg
│       └── web.jpg
│
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css               # Variables CSS globales y estilos base
│   │
│   └── app/
│       ├── app.ts               # Componente raíz
│       ├── app.html
│       ├── app.css
│       ├── app.routes.ts        # Definición de rutas
│       ├── app.config.ts        # Configuración de la app (providers, router)
│       │
│       ├── models/
│       │   └── models.ts        # Interfaces TypeScript (Service, etc.)
│       │
│       ├── services/
│       │   ├── data.service.ts       # Carga de datos desde public/data/
│       │   └── favorites.service.ts  # Gestión de favoritos (localStorage)
│       │
│       ├── components/          # Componentes reutilizables
│       │   ├── header/
│       │   │   ├── header.component.ts
│       │   │   ├── header.component.html
│       │   │   └── header.component.css
│       │   ├── footer/
│       │   │   ├── footer.component.ts
│       │   │   ├── footer.component.html
│       │   │   └── footer.component.css
│       │   └── service-card/        # Card usada en home (variant: home) y catálogo (variant: catalog)
│       │       ├── service-card.component.ts
│       │       ├── service-card.component.html
│       │       └── service-card.component.css
│       │
│       └── pages/               # Vistas / páginas de la app
│           ├── home/            # Página de inicio
│           ├── services/        # Catálogo de servicios
│           ├── service-detail/  # Detalle de un servicio (/service/:slug)
│           ├── about/           # Quiénes somos
│           └── contact/         # Formulario de contacto
│
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

---

## Rutas

| Ruta | Página |
|---|---|
| `/` | Home |
| `/services` | Catálogo de servicios |
| `/service/:slug` | Detalle de servicio |
| `/about` | Quiénes somos |
| `/contact` | Contacto |
