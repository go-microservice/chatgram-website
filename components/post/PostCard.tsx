// PostCard.tsx
import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  content: string;
  username: string;
  avatar: string;
  lastReplyUserId: number | null;
  lastReplyTime: string | null;
  postId: number;
  replyCount: number;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  username,
  avatar,
  lastReplyUserId,
  lastReplyTime,
  postId,
  replyCount,
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <img src={avatar} alt={`${username}'s avatar`} className="w-8 h-8 rounded-full mr-2" />
        <div>
          <span className="text-gray-700">{username}</span>
          <p className="text-sm text-gray-500">
            {lastReplyUserId && (
              <>
                Last reply by {lastReplyUserId === 1 ? 'You' : lastReplyUserId}
                {' at '}
                {lastReplyTime}
              </>
            )}
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <div className="mt-2 text-sm text-gray-500">
        <Link className="text-blue-500 hover:underline" href={`/forum/${postId}`}>
          Read more ({replyCount} {replyCount === 1 ? 'reply' : 'replies'})
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
