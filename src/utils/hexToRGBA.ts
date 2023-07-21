export function hexToRgba(hex: string, alpha = 1): string {
  const hexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  if (!hexRegex.test(hex)) {
    console.error('Invalid hexadecimal color format.');
    return `rgba(${0}, ${0}, ${0}, ${alpha})`;
  }

  hex = hex.replace('#', '');
  const hexLength = hex.length;

  // Expand shorthand format (e.g. "#abc" to "#aabbcc")
  if (hexLength === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  if (alpha < 0 || alpha > 1) {
    console.error('Alpha value must be between 0 and 1.');
    return `rgba(${0}, ${0}, ${0}, ${alpha})`;
  }

  const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return rgba;
}