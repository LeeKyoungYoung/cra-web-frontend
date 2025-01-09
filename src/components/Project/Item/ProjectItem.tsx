import { Project } from '~/models/Project';
import styles from './ProjectItem.module.css';
import { useState } from 'react';
import Modal from 'react-modal';

export default function ProjectItem({ project }: { project: Project }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const showAnswer = () => {
    <Modal isOpen={true}>모달입니다.</Modal>;
  };

  return (
    <div className={styles['project-block']}>
      <div className={styles['project-picture']}>사진</div>
      <div className={styles['title']}>{project.serviceName}</div>
      <div className={styles['content']}>{project.teamName}</div>
      <button onClick={showAnswer}>자세히 보기</button>
    </div>
  );
}
