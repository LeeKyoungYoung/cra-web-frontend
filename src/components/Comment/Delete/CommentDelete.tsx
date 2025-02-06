import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey.ts';
import { deleteComments } from '~/api/comment.ts';
import styles from './CommentDelete.module.css';

export default function CommentDelete({ id }: { id: number }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteComments(id),
    onSuccess: () => {
      alert('댓글 삭제 성공');
      // 댓글 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.comment.commentsById(id),
      });
      queryClient.refetchQueries({
        queryKey: QUERY_KEY.comment.commentsById(id),
      });
    },
    onError: (error) => {
      console.error('댓글 삭제 실패:', error);
      alert('댓글 삭제 실패');
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  return (
    <div className={styles['delete-button']} onClick={handleDelete}>
      삭제
    </div>
  );
}
