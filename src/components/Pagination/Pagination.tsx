import React from 'react';
import LeftVector from '~/assets/images/Vector/LeftVector.png';
import RightVector from '~/assets/images/Vector/RightVector.png';
import styles from './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages === 0) return null;

  return (
    <div className={styles.pagenations}>
      <img src={LeftVector} />
      {[...Array(totalPages)].map((_, pageIndex) => (
        <div
          key={pageIndex}
          className={`${styles['pagenations-elipse']} ${
            currentPage === pageIndex
              ? styles['pagenations-elipse-selected']
              : styles['pagenations-elipse-unselected']
          }`}
          onClick={() => onPageChange(pageIndex)}
        >
          {pageIndex + 1}
        </div>
      ))}
      <img src={RightVector} />
    </div>
  );
}

export default Pagination;
