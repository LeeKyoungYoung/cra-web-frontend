import React from 'react';
import { Project } from '~/models/Project';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { getProjectById } from '~/api/project';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getHavrutaByIdAdmin } from '~/api/havruta';
import { Havruta } from '~/models/Havruta';

const Container = styled.div`
  padding: 10rem;
`;
const Content = styled.div`
  padding: 1rem 0;
  font-size: 1rem;
`;

const Bold = styled.b`
  padding-right: 0.25rem;
`;

function HavrutaDetailAdmin() {
  const { id } = useParams<{ id: string }>();
  const havrutaId = Number(id);

  const havrutaQuery = useQuery<Havruta>({
    queryKey: QUERY_KEY.havruta.havrutaViewById(havrutaId),
    queryFn: async () => getHavrutaByIdAdmin(havrutaId),
  });

  let content;

  if (havrutaQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (havrutaQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (havrutaQuery.isSuccess) {
    const havruta = havrutaQuery.data;
    return (
      <Container>
        <h1>프로젝트 자세히 보기</h1>
        <Content>
          <Bold>과목명:</Bold> {havruta.className}
        </Content>
        <Content>
          <Bold>학기:</Bold> {havruta.professor}
        </Content>
      </Container>
    );
  }

  return <div>{content}</div>;
}

export default HavrutaDetailAdmin;
