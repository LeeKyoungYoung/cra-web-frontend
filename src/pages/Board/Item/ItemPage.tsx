import React, { useState } from 'react';
import { CATEGORY } from '../../../constants/category';
import styles from './ItemPage.module.css';
import ItemList from '~/components/Item/List/ItemList';
import { ITEMCATEGORY } from '~/constants/itemCategory';

export default function ItemPage() {
  return (
    <div className={styles['project-section']}>
      <p>비품 페이지</p>
      <ItemList itemCategory={ITEMCATEGORY.ITEM} />
    </div>
  );
}
