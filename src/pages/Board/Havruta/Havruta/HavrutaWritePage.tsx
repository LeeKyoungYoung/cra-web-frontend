import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY } from '../../../../constants/category';
import HavrutaWrite from '~/components/Havruta/Write/HavrutaWrite';

export default function HavrutaWritePage() {
  return <HavrutaWrite category={CATEGORY.HAVRUTA} />;
}
