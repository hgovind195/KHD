/**
 * Utility to optimize Cloudinary asset delivery.
 * Automatically enables modern formats (AVIF/WebP) and adaptive quality (q_auto),
 * with optional width constraints for responsive mobile rendering.
 */
export function optimizeCloudinary(url: string, width?: number): string {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com") || url.includes("/f_auto,q_auto")) {
    return url;
  }
  const prefix = "/image/upload/";
  const idx = url.indexOf(prefix);
  if (idx === -1) return url;
  const transform = width ? `f_auto,q_auto,w_${width}` : "f_auto,q_auto";
  return url.slice(0, idx + prefix.length) + transform + "/" + url.slice(idx + prefix.length);
}
