"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Logo1.png";

interface StaticBlogDisplay {
  id: number;
  title: string;
  excerpt: string;
  hero_image: string;
  slug: string;
  date?: string;
}

interface BlogCardProps {
  blog: StaticBlogDisplay;
}

const BlogCard: React.FC<BlogCardProps> = memo(({ blog }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl p-2 ring-1 ring-gray-100 bg-white transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:w-[380px] max-sm:w-full sm:w-[340px]">
      <Link href={`/blogs/${blog.slug}`} className="block">
        <div className="relative rounded-xl overflow-hidden h-[240px] w-full">
          <Image
            src={blog.hero_image}
            width={380}
            height={240}
            className="h-[240px] rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={blog.title}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6WUc5jhSf5tvmpt6gVIqrJQ4JbqQrbAU1Bpw7I2Q4zQYyCrzf1gZJKeJPUhRTTFJq0SdBTmIIiPLP/2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 rounded-xl transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center h-[250px]">
            <span className="rounded-full p-1 scale-0 group-hover:scale-100 transition-all duration-300">
              <Image
                src={logo.src}
                alt="logo"
                width={128}
                height={64}
                className="w-32 mb-4 filter brightness-0 invert cursor-pointer"
              />
            </span>
          </div>
        </div>

        <div className="p-6 bg-gray-100 ring-1 ring-gray-200 mt-2 rounded-xl min-h-64 flex flex-col justify-between">
          <h2 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-trust-blue">
            {blog.title}
          </h2>
          <div
            className="prose-sm line-clamp-3 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: blog.excerpt.substring(0, 100) + "...",
            }}
          />
          <div className="flex items-center text-sm font-medium ring-1 ring-black bg-black text-white w-fit p-3 hover:bg-transparent transition-all duration-300 hover:text-growth-green rounded-sm">
            Read More
            <svg
              className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;
