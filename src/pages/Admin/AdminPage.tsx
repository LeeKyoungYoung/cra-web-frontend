import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminHome from '~/components/Admin/AdminHome';
import AdminSideBar from '~/components/Admin/AdminSideBar';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 60%;
`;

export default function AdminPage() {
  return (
    <Container>
      <AdminSideBar />
      <AdminHome />
    </Container>
  );
}
