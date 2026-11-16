import { Fragment, type CSSProperties, type ReactNode } from "react";

interface SplitWordsProps {
  text: string;
  /** Fragmento exacto de `text` que se pinta con el degradado de la marca. */
  highlight?: string;
  /** Degradado en movimiento para el fragmento resaltado (título del hero). */
  live?: boolean;
  /**
   * `true`: cada palabra lleva máscara, para revelarla subiendo desde abajo.
   * `false`: palabras sueltas, para iluminarlas una por una.
   */
  mask?: boolean;
  /** Quién anima las palabras: los efectos de página (`word`) o un escenario (`stage-word`). */
  marker?: "word" | "stage-word";
}

/** Tramo de una palabra: resaltado o no (p. ej. "diferente" + "?" en "diferente?"). */
interface Part {
  text: string;
  highlighted: boolean;
}

/**
 * Divide el texto en palabras (lo que hay entre espacios) y marca qué parte de cada una
 * cae dentro del fragmento resaltado. Así la puntuación pegada al fragmento ("negocio?",
 * "persona,") se queda en la misma palabra, sin espacios de más.
 */
function splitWords(text: string, highlight?: string): Part[][] {
  const start = highlight ? text.indexOf(highlight) : -1;
  const end = start === -1 ? -1 : start + (highlight?.length ?? 0);
  const words: Part[][] = [];

  for (const match of text.matchAll(/\S+/g)) {
    const from = match.index ?? 0;
    const to = from + match[0].length;
    const cuts = [from, ...[start, end].filter((cut) => cut > from && cut < to), to];
    const parts: Part[] = [];
    for (let index = 0; index < cuts.length - 1; index += 1) {
      const a = cuts[index];
      const b = cuts[index + 1];
      parts.push({ text: text.slice(a, b), highlighted: start !== -1 && a >= start && b <= end });
    }
    words.push(parts);
  }
  return words;
}

/**
 * Divide un texto en palabras animables sin romper su lectura: los espacios siguen siendo
 * texto real, así que lectores de pantalla y buscadores leen la frase completa.
 */
export function SplitWords({
  text,
  highlight,
  live = false,
  mask = true,
  marker = "word",
}: SplitWordsProps) {
  const words = splitWords(text, highlight);
  const highlightedCount = words.flat().filter((part) => part.highlighted).length;
  const markerProps = marker === "word" ? { "data-word": "" } : { "data-stage-word": "" };
  let highlightedIndex = 0;

  const renderPart = (part: Part, key: number): ReactNode => {
    if (!part.highlighted) return <Fragment key={key}>{part.text}</Fragment>;

    // Cada palabra pinta solo su tramo del degradado: se lee continuo aunque se anime aparte.
    const slice = {
      "--hl-n": highlightedCount,
      "--hl-j": highlightedIndex,
      // El degradado vivo va desfasado en cada palabra: se ve como una sola ola.
      ...(live && { animationDelay: `${highlightedIndex * -0.9}s` }),
    } as CSSProperties;
    highlightedIndex += 1;
    // El degradado va en un <span> propio: quien se mueve es la palabra que lo contiene.
    return (
      <span key={key} className={live ? "text-gradient-live" : "text-gradient-slice"} style={slice}>
        {part.text}
      </span>
    );
  };

  return words.map((parts, index) => {
    const content = parts.map(renderPart);
    const key = `${parts.map((part) => part.text).join("")}-${index}`;

    return (
      <Fragment key={key}>
        {mask ? (
          <span className="word">
            <span
              className="word-inner"
              style={{ "--word-index": index } as CSSProperties}
              {...markerProps}
            >
              {content}
            </span>
          </span>
        ) : (
          <span {...markerProps}>{content}</span>
        )}
        {index < words.length - 1 ? " " : null}
      </Fragment>
    );
  });
}
