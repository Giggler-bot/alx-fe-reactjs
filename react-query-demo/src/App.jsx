import React from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  return (
    <div>
      <h1>React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}

 ["QueryClient", "QueryClientProvider", "queryClient", "client={queryClient}"]