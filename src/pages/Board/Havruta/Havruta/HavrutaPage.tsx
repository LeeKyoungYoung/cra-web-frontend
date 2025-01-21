import React, { useState } from 'react';
import HavrutaList from '~/components/Havruta/list/HavrutaList';

export default function HavrutaPage() {
  return (
    <div>
      <h1>Havruta 게시판</h1>
      <HavrutaList />
    </div>
  );
}
