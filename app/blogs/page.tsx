import { cache } from "react";
import BlogListClient from "@/components/blogs/BlogListClient";
import { blogs as staticBlogsData, Blog as StaticBlog } from "./data";

interface StaticBlogDisplay {
  id: number;
  title: string;
  excerpt: string;
  hero_image: string;
  slug: string;
  date?: string;
}

const mapStaticBlog = (staticBlog: StaticBlog): StaticBlogDisplay => ({
  id: staticBlog.id,
  title: staticBlog.title,
  excerpt: staticBlog.description,
  hero_image: staticBlog.image,
  slug: staticBlog.slug,
  date: staticBlog.date,
});

// Cache the data processing for better performance
const getBlogsData = cache((): StaticBlogDisplay[] => {
  return staticBlogsData.map(mapStaticBlog);
});

export default async function BlogsPage() {
  const blogsData = getBlogsData();

  return <BlogListClient initialBlogs={blogsData} />;
}

export const dynamic = "force-static";
