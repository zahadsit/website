"use client";

import { notFound } from "next/navigation";
import { blogs } from "@/app/blogs/data";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook, FaLink, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";
import logo from "@/assets/Logo1.png";

interface StaticBlog {
  slug: string;
  title: string;
  content: string;
  description?: string;
  image?: string;
  date?: string;
}

export default function BlogContent({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<StaticBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageUrl, setPageUrl] = useState<string>("");

  useEffect(() => {
    const staticBlog = blogs.find((b) => b.slug === slug);
    setBlog(staticBlog || null);
    setLoading(false);
    if (typeof window !== "undefined") setPageUrl(window.location.href);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bar"></div>
          ))}
        </div>
        <style jsx>{`
          .loader {
            display: flex;
            height: 40px;
          }
          .bar {
            width: 4px;
            height: 70%;
            margin: 0 2px;
            background: #b2923c;
            border-radius: 100px;
            animation: pulse 1.2s infinite ease-in-out;
          }
          .bar:nth-child(1) {
            animation-delay: -1.2s;
          }
          .bar:nth-child(2) {
            animation-delay: -1.1s;
          }
          .bar:nth-child(3) {
            animation-delay: -1s;
          }
          .bar:nth-child(4) {
            animation-delay: -0.9s;
          }
          .bar:nth-child(5) {
            animation-delay: -0.8s;
          }
          @keyframes pulse {
            0%,
            40%,
            100% {
              transform: scaleY(1);
            }
            20% {
              transform: scaleY(1.5);
            }
          }
        `}</style>
      </div>
    );
  }

  if (!blog) return notFound();

  const contentHTML = marked.parse(blog.content || "");

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(blog.title);
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      toast.success("Link copied!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch {
      toast.error("Failed to copy link");
    }
  };

  /** Reusable icon button */
  const IconBtn = ({
    href,
    title,
    color,
    children,
    onClick,
  }: {
    href?: string;
    title: string;
    color: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => {
    const base =
      "flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors duration-200";
    const style = `${base} ${color}`;
    return href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={style + " hover:opacity-90"}
      >
        {children}
      </a>
    ) : (
      <button
        onClick={onClick}
        title={title}
        className={style + " hover:opacity-90"}
      >
        {children}
      </button>
    );
  };

  return (
    <article className="relative flex flex-col md:flex-row px-4 md:px-8 py-12 md:pt-[200px] pt-[150px] gap-8">
      {/* Left sidebar for desktop */}
      <aside className="hidden md:flex flex-col items-center gap-2 sticky top-40 self-start pt-6">
        <IconBtn
          href={shareLinks.linkedin}
          title="Share on LinkedIn"
          color="bg-blue-600"
        >
          <FaLinkedin size={22} />
        </IconBtn>
        <IconBtn
          href={shareLinks.facebook}
          title="Share on Facebook"
          color="bg-[#1877f2]"
        >
          <FaFacebook size={22} />
        </IconBtn>
        <IconBtn
          href={shareLinks.whatsapp}
          title="Share on WhatsApp"
          color="bg-green-500"
        >
          <FaWhatsapp size={22} />
        </IconBtn>
        <IconBtn onClick={copyLink} title="Copy Link" color="bg-gray-600">
          <FaLink size={22} />
        </IconBtn>
      </aside>

      {/* Main blog content */}
      <div className="flex-1">
        <div className="relative md:aspect-video aspect-[1/1] top-0 rounded-xl overflow-hidden">
          <img
            src={blog.image || "https://zahads.com/default-image.jpg"}
            alt={blog.title}
            className="w-full md:aspect-video aspect-[1/1] object-cover  mb-6"
          />
          <div className="h-full w-full bg-gradient-to-b from-black/50 from-blur inset-0 to-transparent absolute flex items-start justify-end  top-0">
            <div className="md:p-5">
              <img
                src={logo.src}
                alt="logo"
                className="md:w-32 w-24   filter brightness-0 invert cursor-pointer"
              />
            </div>
          </div>
        </div>

        <h1 className="md:text-[2.1rem] text-2xl font-bold leading-tight mt-6 mb-2">
          {blog.title}
        </h1>
        {blog.date && (
          <p className="text-gray-600 mb-4">Published on: {blog.date}</p>
        )}

        {/* Mobile share bar */}
        <div className="flex md:hidden gap-4 mb-6 ">
          <IconBtn
            href={shareLinks.linkedin}
            title="LinkedIn"
            color="bg-blue-600"
          >
            <FaLinkedin size={20} />
          </IconBtn>
          <IconBtn
            href={shareLinks.facebook}
            title="Facebook"
            color="bg-[#1877f2]"
          >
            <FaFacebook size={20} />
          </IconBtn>
          <IconBtn
            href={shareLinks.whatsapp}
            title="WhatsApp"
            color="bg-green-500"
          >
            <FaWhatsapp size={20} />
          </IconBtn>
          <IconBtn onClick={copyLink} title="Copy Link" color="bg-gray-600">
            <FaLink size={20} />
          </IconBtn>
        </div>

        <div className="prose prose-lg max-w-none bg-gray-100/50 md:px-16 md:py-5 p-5 rounded-3xl">
          <div
            className="[&>*]:mb-6 [&>p]:text-justify
            [&>h1]:text-2xl sm:[&>h1]:text-3xl
            [&>h2]:text-xl  sm:[&>h2]:text-2xl
            [&>h3]:text-lg  sm:[&>h3]:text-xl
            [&>h1]:font-bold [&>h2]:font-bold [&>h3]:font-bold
            [&>h1]:mb-6 [&>h2]:mb-4 [&>h3]:mb-4
            [&>img]:w-full [&>img]:rounded-lg [&>img]:my-8
            [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6
            [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic
            [&>pre]:bg-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto
            [&>p>img]:inline-block [&>p>img]:max-w-full [&>p>img]:rounded-lg [&>p>img]:my-8 blogsExtra blogContent"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </article>
  );
}
