import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjectById } from '~/api/project';
import { QUERY_KEY } from '~/api/queryKey';
import Modal from 'react-modal';
import styles from '../Project/ProjectModal.module.css';

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
    <>
<<<<<<< HEAD
      <Modal
        className={styles.modalContent}
        overlayClassName={styles.overlay}
        isOpen
        onRequestClose={closeModal}
      >
        <div className={styles['modal-header']}>
          {project.serviceName}
          <a
            href={project.serviceUrl}
            target="_blank"
            rel="none"
            className={styles['url-button']}
          >
            URL 이동
          </a>
        </div>
        <div className={styles['modal-body']}>
          <div className={styles['image-box']}>
            <img src={project.imageUrl} className={styles['image']} />
          </div>
          <div className={styles['description']}>
            <div className={styles['content-description']}>프로젝트 설명</div>
            <div>{project.content}</div>
            {/* <div className={styles['info']}>
              <p>Members: {project.members}</p>
              <p>Semester: {project.semester}</p>
              <p>GitHub URL: {project.gitHubUrl}</p>
            </div> */}
          </div>
        </div>
        <div className={styles['modal-footer']}>
          <button onClick={closeModal} className={styles['close-button']}>
            X
          </button>
        </div>
=======
      <Modal className={styles.modalContent} isOpen onRequestClose={closeModal}>
        <h2>{project.serviceName}</h2>
        <p>{project.content}</p>
        <p>멤버: {project.members}</p>
        <button onClick={closeModal}>닫기</button>
>>>>>>> 9d7c5cfe4efc8572800f4709c09d5c4d939f5694
      </Modal>
    </>
  );
};

export default ProjectModal;
