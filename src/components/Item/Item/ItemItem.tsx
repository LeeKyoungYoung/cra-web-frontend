import { Item } from '~/models/Item';
import styles from '../../Project/Item/ProjectItem.module.css';
import { useState } from 'react';
import ProjectModal from '~/components/Modal/Project/ProjectModal';

export default function ItemItem({ item }: { item: Item }) {
  const [modalIsOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className={styles['project-block']} onClick={openModal}>
        <div className={styles['project-picture']}>
          <img src={item.imageUrl} className={styles['project-picture']} />
        </div>
        <div className={styles['title']}>{item.name}</div>
        <div className={styles['content']}>{item.description}</div>
        <div className={styles['content']}>
          {item.isBorrowed ? <span>Borrowed</span> : <span>Available</span>}
        </div>
      </div>
      {modalIsOpen && (
        <ProjectModal projectId={item.id!} closeModal={closeModal} />
      )}
    </>
  );
}
