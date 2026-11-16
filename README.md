# DiegoDev

Sitio de servicios de desarrollo web de Diego Fernández: https://diegofdev.vercel.app

Next.js (App Router) + TypeScript + Tailwind CSS. Scrollytelling con GSAP (ScrollTrigger) y
Lenis para el scroll suave; Motion solo anima el menú móvil.

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
- `src/config/projects.ts`: `EJEMPLOS_URL`, la dirección del sitio de ejemplos animados. Vacía, el
  botón del proyecto dice "Próximamente"; con la URL, se vuelve un enlace a una pestaña nueva.
- `src/data/`: todo el contenido del sitio (servicios, giros, proceso, proyectos, preguntas frecuentes, textos de cada página).
- `src/app/globals.css`: tokens de diseño (colores, degradado, radios, sombras).

## Animaciones de scroll

- `src/components/client/scroll/SmoothScroll.tsx`: Lenis + ScrollTrigger, montado una sola vez en el layout.
- `src/lib/motion/stage.ts`: escenarios de pantallas fijadas (capítulos del inicio, /soluciones y
  /proyectos) y sus transiciones (`stage-shapes.ts`). El HTML lo arma `src/components/scroll/Stage.tsx`.
- `src/lib/motion/page-effects.ts`: efectos que se activan con atributos `data-*` (apariciones,
  parallax, línea de tiempo, textos que se iluminan). Cada atributo está explicado ahí.
- Con `prefers-reduced-motion` no hay scroll suave, nada se fija y todo se ve estático.

Los pendientes por confirmar están marcados con `TODO(Diego)`.

## Formulario de contacto

Usa EmailJS desde el navegador. Necesita tres variables de entorno en `.env` (local) y en Vercel;
sus nombres están en `src/config/contact-form.ts`. Conservan el prefijo de Create React App a
propósito: `next.config.ts` las expone al navegador. El archivo `.env` nunca se sube al repositorio.
