export interface StaticBlogDisplay {
    id: number;
    title: string;
    excerpt: string;
    hero_image: string;
    slug: string;
    date?: string;
}

export interface BlogListClientProps {
    initialBlogs: StaticBlogDisplay[];
}

export interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface BlogCardProps {
    blog: StaticBlogDisplay;
  }