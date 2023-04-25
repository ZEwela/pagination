import { generateRandomUsers } from "<import>/utils/generateRandomUsers";
import { useState, useEffect } from "react";
import { User } from "<import>/utils/generateRandomUsers";
import Cards from "<import>/components/Cards";
import Pagination from "<import>/components/Pagination";
export default function Home() {
  const [data, setData] = useState<User[] | undefined>();
  const [postsPerPage, setPostsPerPage] = useState<number>(9);

  useEffect(() => {
    const dataArray: User[] = generateRandomUsers(30);
    setData(dataArray);
  }, []);
  const lastPostIndex: number = postsPerPage;
  const firstPostIndex: number = lastPostIndex - postsPerPage;
  const currentPosts: User[] | undefined = data?.slice(
    firstPostIndex,
    lastPostIndex
  );
  return (
    <main className="flex min-h-screen flex-col mx-auto items-center justif-center">
      <Cards data={currentPosts} />
      <Pagination
        totalPosts={data?.length}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
      />
    </main>
  );
}
