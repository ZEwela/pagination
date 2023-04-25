import React, { Dispatch, SetStateAction } from "react";
interface ParginationProps {
  totalPosts: number;
  postsPerPage: number;
  setPostsPerPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  totalPosts,
  postsPerPage,
  setPostsPerPage,
}: ParginationProps) => {
  const handleLoadMore = () => {
    setPostsPerPage(postsPerPage + 9);
  };
  return (
    <div className="flex justify-center">
      {postsPerPage < totalPosts && (
        <button
          onClick={() => handleLoadMore()}
          type="button"
          className="rounded-lg border border-blue-400 bg-blue-300 p-5 focus:ring  hover:border-blue-600 hover:bg-blue-500 cursor-pointer"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Pagination;
