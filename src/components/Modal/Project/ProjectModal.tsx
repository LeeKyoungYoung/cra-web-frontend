import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjectById } from '~/api/project';
import { QUERY_KEY } from '~/api/queryKey';
import Modal from 'react-modal';

const ProjectModal = ({
  projectId,
  closeModal,
}: {
  projectId: number;
  closeModal: () => void;
}) => {
  const {
    data: project,
    isLoading,
    isError,
  } = useQuery({
    queryKey: QUERY_KEY.project.projectById(projectId),
    queryFn: async () => getProjectById(projectId),
  });

  if (isLoading) {
    return (
      <Modal isOpen onRequestClose={closeModal}>
        Loading...
      </Modal>
    );
  }

  if (isError || !project) {
    return (
      <Modal isOpen onRequestClose={closeModal}>
        <div>에러가 발생했습니다.</div>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    );
  }

  return (
    <Modal isOpen onRequestClose={closeModal}>
      <h2>{project.serviceName}</h2>
      <p>{project.content}</p>
      <p>멤버: {project.members}</p>
      <button onClick={closeModal}>닫기</button>
    </Modal>
  );
};

export default ProjectModal;
