"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [bump, setBump] = useState(false);

  function handleClick() {
    setLikes(likes + 1);
    setBump(true);
    setTimeout(() => setBump(false), 200);
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
    >
      <span className={`like-bump ${bump ? "bump" : ""}`}>👍</span>
      Curtir ({likes})
    </button>
  );
}
