import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 1, // 1 minute
    cacheTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Posts (JSONPlaceholder)</h2>
      <div style={{ marginBottom: 8 }}>
        <button onClick={() => refetch()}>Refetch Posts</button>
        {isFetching && <span style={{ marginLeft: 8 }}>Updating...</span>}
      </div>
      <ul>
        {data.slice(0, 10).map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <small>Data cached for 1 minute; check network tab to confirm caching</small>
      </div>
    </div>
  );
}


["refetchOnWindowFocus", "keepPreviousData"]