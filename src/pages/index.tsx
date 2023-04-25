import { generateRandomUsers } from "<import>/utils/generateRandomUsers";
import { useState, useEffect } from "react";
import { User } from "<import>/utils/generateRandomUsers";
export default function Home() {
  const [data, setData] = useState<User[] | undefined>();
  const [postsPerPage, setPostPerPage] = useState<number>(9);

  useEffect(() => {
    const dataArray: User[] = generateRandomUsers(30);
    setData(dataArray);
  }, []);
  const lastPostIndex = postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
  return (
    <main className="flex min-h-screen flex-col mx-auto items-center justif-center">
      <div className="p-40 ">
        <h1 className="text-3xl font-bold ">Pagination</h1>
      </div>
    </main>
  );
}
