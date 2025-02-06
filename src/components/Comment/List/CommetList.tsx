import CommentItem from '~/components/Comment/Item/CommentItem';
import { Comment } from '~/models/Comment';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { getCommentsByBoardId } from '~/api/comment';

export default function CommentList({ id }: { id: number }) {
  const commentsQuery = useQuery<Comment[]>({
    queryKey: QUERY_KEY.comment.commentsById(id),
    queryFn: async () => getCommentsByBoardId(id),
  });

  let content;

  if (commentsQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (commentsQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (commentsQuery.isSuccess) {
    console.log(commentsQuery.data);
    content = commentsQuery.data.map((comment) => (
      <div>
        <CommentItem key={comment.id} comment={comment} isRoot={true} />
        {comment.commentList.map((childComment) => (
          <CommentItem
            key={childComment.id}
            comment={childComment}
            isRoot={false}
          />
        ))}
      </div>
    ));
  }

  return <div>{content}</div>;
}
