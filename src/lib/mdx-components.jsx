import Link from "next/link";
import BlogImage from "../components/BlogImage.jsx";

export const mdxComponents = {
  BlogImage,
  h1: (props) => (
    <h2
      className="text-white text-3xl md:text-4xl font-semibold tracking-tight mt-10 mb-6"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="text-white text-2xl md:text-3xl font-semibold mt-10 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-white text-xl md:text-2xl font-semibold mt-8 mb-3" {...props} />
  ),
  p: (props) => <p className="text-white/80 leading-relaxed my-4" {...props} />,
  ul: (props) => <ul className="text-white/80 list-disc pl-6 my-4" {...props} />,
  ol: (props) => <ol className="text-white/80 list-decimal pl-6 my-4" {...props} />,
  li: (props) => <li className="my-1" {...props} />,
  a: ({ href, children, ...props }) => {
    const className = "text-white/90 hover:text-white";

    if (typeof href === "string" && href.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  },
  img: (props) => (
    <img
      {...props}
      className={`h-auto w-full rounded-xl border border-white/10 my-6 ${
        props.className || ""
      }`}
    />
  ),
  strong: (props) => <strong className="text-white" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-white/20 pl-4 text-white/80 italic my-6"
      {...props}
    />
  ),
};
