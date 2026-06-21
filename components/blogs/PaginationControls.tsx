"use client";

import { memo, useCallback } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = memo(
  ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = useCallback(() => {
      onPageChange(Math.max(currentPage - 1, 1));
    }, [currentPage, onPageChange]);

    const handleNext = useCallback(() => {
      onPageChange(Math.min(currentPage + 1, totalPages));
    }, [currentPage, totalPages, onPageChange]);

    const handlePageClick = useCallback(
      (page: number) => {
        onPageChange(page);
      },
      [onPageChange]
    );

    if (totalPages <= 1) return null;

    return (
      <Pagination className="mt-10">
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {/* Always show page 1 */}
          <PaginationItem>
            <PaginationLink
              isActive={currentPage === 1}
              onClick={() => handlePageClick(1)}
              className="cursor-pointer"
            >
              1
            </PaginationLink>
          </PaginationItem>

          {/* Left ellipsis if needed */}
          {currentPage > 3 && (
            <PaginationItem>
              <span className="px-2 text-gray-500">…</span>
            </PaginationItem>
          )}

          {/* Current-1 */}
          {currentPage > 2 && currentPage < totalPages && (
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageClick(currentPage - 1)}
                className="cursor-pointer"
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Current page (if not first/last) */}
          {currentPage !== 1 && currentPage !== totalPages && (
            <PaginationItem>
              <PaginationLink isActive className="cursor-pointer">
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Current+1 */}
          {currentPage < totalPages - 1 && (
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageClick(currentPage + 1)}
                className="cursor-pointer"
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Right ellipsis if needed */}
          {currentPage < totalPages - 2 && (
            <PaginationItem>
              <span className="px-2 text-gray-500">…</span>
            </PaginationItem>
          )}

          {/* Always show last page */}
          {totalPages > 1 && (
            <PaginationItem>
              <PaginationLink
                isActive={currentPage === totalPages}
                onClick={() => handlePageClick(totalPages)}
                className="cursor-pointer"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
);

PaginationControls.displayName = "PaginationControls";

export default PaginationControls;
