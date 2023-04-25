import { generateRandomUsers } from "<import>/utils/generateRandomUsers";
import { useState, useEffect } from "react";
import { User } from "<import>/utils/generateRandomUsers";
import Cards from "<import>/components/Cards";
import Pagination from "<import>/components/Pagination";
export default function Home() {
  const [data, setData] = useState<User[]>([]);
  const [postsPerPage, setPostsPerPage] = useState<number>(9);

  useEffect(() => {
    const dataArray: User[] = generateRandomUsers(30);
    setData(dataArray);
  }, []);
  const lastPostIndex: number = postsPerPage;
  const firstPostIndex: number = lastPostIndex - postsPerPage;
  const currentPosts: User[] = data.slice(firstPostIndex, lastPostIndex);
  return (
    <main className="max-6 my-12 min-h-screen max-w-3xl items-center justify-center text-left md:mx-auto md:max-w-5xl">
      <Cards data={currentPosts} />
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
      />
    </main>
  );
}
