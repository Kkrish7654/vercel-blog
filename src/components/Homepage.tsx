import React from "react";
interface PostData {
  id: number;
  name: string;
}
const Homepage = ({ getData }: { getData: PostData[] }) => {
  return (
    <div>
      {Array.isArray(getData) &&
        getData.map((post) => <span key={post.id}>{post.name}</span>)}
    </div>
  );
};

export default Homepage;
