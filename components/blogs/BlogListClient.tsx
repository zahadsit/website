"use client";

import { useState, useMemo, useCallback, Suspense } from "react";
import BlogCard from "./BlogCard";
import PaginationControls from "./PaginationControls";
import BlogLoading from "./BlogLoading";

interface StaticBlogDisplay {
  id: number;
  title: string;
  excerpt: string;
  hero_image: string;
  slug: string;
  date?: string;
}

const ITEMS_PER_PAGE = 8;

interface BlogListClientProps {
  initialBlogs: StaticBlogDisplay[];
}

const BlogListClient: React.FC<BlogListClientProps> = ({ initialBlogs }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Memoized calculations
  const totalPages = useMemo(
    () => Math.ceil(initialBlogs.length / ITEMS_PER_PAGE),
    [initialBlogs.length]
  );

  const paginatedBlogs = useMemo(
    () =>
      initialBlogs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [currentPage, initialBlogs]
  );

  // Memoized page change handler
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="pt-32 md:pt-[150px] pb-6 max-sm:px-4 flex flex-col items-center px-8 md:px-16">
      <h1 className="text-center text-[2rem] py-4">Blogs</h1>

      {/* Single Suspense boundary for the entire blog list */}
      <Suspense fallback={<BlogListLoadingSkeleton />}>
        <div className="flex justify-center flex-wrap gap-6">
          {paginatedBlogs.length ? (
            paginatedBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))
          ) : (
            <p className="text-center text-gray-500">No blogs found.</p>
          )}
        </div>
      </Suspense>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

// Loading skeleton for the entire blog list
const BlogListLoadingSkeleton = () => (
  <div className="flex justify-center flex-wrap gap-6">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="rounded-xl p-2 bg-gray-100 md:w-[380px] max-sm:w-full sm:w-[340px] animate-pulse"
      >
        <div className="h-[240px] bg-gray-200 rounded-xl w-full"></div>
        <div className="p-6 bg-gray-100 mt-2 rounded-xl min-h-64 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-10 bg-gray-200 rounded w-32 mt-4"></div>
        </div>
      </div>
    ))}
  </div>
);

export default BlogListClient;
