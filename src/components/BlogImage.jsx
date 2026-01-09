import Image from "next/image";

export default function BlogImage({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}) {
  if (!src) return null;

  const safeAlt = typeof alt === "string" ? alt : "";

  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-xl border border-white/10">
        <Image
          src={src}
          alt={safeAlt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 768px"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="text-white/60 text-sm mt-2">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
