# Diego Fernández Web

Sitio de servicios de desarrollo web de Diego Fernández: https://diegofdev.vercel.app

Next.js (App Router) + TypeScript + Tailwind CSS + Motion.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Requiere Node 22.

## Dónde cambiar cada cosa

- `src/config/site.ts`: marca, URL, teléfono, WhatsApp, correo y redes.
- `src/config/navigation.ts`: enlaces del menú y del footer.
- `src/data/`: todo el contenido del sitio (servicios, giros, proceso, proyectos, preguntas frecuentes, textos de cada página).
- `src/app/globals.css`: tokens de diseño (colores, degradado, radios, sombras).

Los pendientes por confirmar están marcados con `TODO(Diego)`.

## Formulario de contacto

Usa EmailJS desde el navegador. Necesita estas variables en `.env` (local) y en Vercel:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

Conservan el prefijo `REACT_APP_` a propósito; `next.config.ts` las expone al navegador.
