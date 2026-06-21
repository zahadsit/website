// Add loading states for blog pages
// app/blogs/[slug]/loading.tsx
export default function BlogLoading() {
  return (
    <div className="pt-32 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
      <div className="h-64 bg-gray-200 rounded w-full mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}
