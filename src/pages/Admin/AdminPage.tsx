import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminHome from '~/components/Admin/AdminHome';
import AdminSideBar from '~/components/Admin/AdminSideBar';

const Container = styled.div`
  padding: 10rem;
  display: flex;
  justify-content: space-between;
`;

export default function AdminPage() {
  return (
    <Container>
      <AdminSideBar />
      <AdminHome />
    </Container>
  );
}
