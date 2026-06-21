import { notFound } from "next/navigation";
import { blogs } from "../data";
import BlogContent from "@/components/blogs/BlogContent";

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export const revalidate = 60;

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  // Ensure slug exists for 404s
  const exists = blogs.some((b) => b.slug === params.slug);
  if (!exists) return notFound();

  const blog = blogs.find((b) => b.slug === params.slug)!;
  const canonicalUrl = `https://www.zahads.com/blogs/${blog.slug}`;

  return (
    <>
      <title>{blog.title}</title>
      <meta
        name="description"
        content={blog.description || "Read this blog for more details."}
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={blog.title} />
      <meta
        property="og:description"
        content={blog.description || "Read this blog for more details."}
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={blog.image || "https://zahads.com/default-image.jpg"}
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={blog.title} />
      <meta
        name="twitter:description"
        content={blog.description || "Read this blog for more details."}
      />
      <meta
        name="twitter:image"
        content={blog.image || "https://zahads.com/default-image.jpg"}
      />

      <div className="max-w-[1200px] mx-auto">
        {/* The client component with all blog logic */}
        <BlogContent slug={params.slug} />
      </div>
    </>
  );
}
