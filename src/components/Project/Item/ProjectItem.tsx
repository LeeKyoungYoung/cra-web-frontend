import { Project } from '~/models/Project';
import styles from './ProjectItem.module.css';
import { useState } from 'react';
import ProjectModal from '~/components/Modal/ProjectModal';

export default function ProjectItem({ project }: { project: Project }) {
  const [modalIsOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className={styles['project-block']} onClick={openModal}>
        <div className={styles['project-picture']}>사진</div>
        <div className={styles['title']}>{project.serviceName}</div>
        <div className={styles['content']}>{project.members}</div>
      </div>
      {modalIsOpen && (
        <ProjectModal projectId={project.id!} closeModal={closeModal} />
      )}
    </>
  );
}
