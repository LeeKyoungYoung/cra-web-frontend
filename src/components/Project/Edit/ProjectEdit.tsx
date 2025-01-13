import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getProjectById, updateProject } from '~/api/project';
import { Project } from '~/models/Project';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { QUERY_KEY } from '~/api/queryKey';
import styles from '../Project.module.css';

function ProjectEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const [formData, setFormData] = useState({
    semester: '',
    teamName: '',
    serviceName: '',
    content: '',
    gitHubUrl: '',
    serviceUrl: '',
    members: [''],
    imageUrls: [''],
  });
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);

  const projectQuery = useQuery<Project>({
    queryKey: QUERY_KEY.project.projectById(projectId),
    queryFn: async () => getProjectById(projectId),
  });

  let content;

  const mutation = useMutation({
    mutationFn: (newProject: Project) => updateProject(newProject),
    onSuccess: async () => {
      alert('프로젝트 수정 성공');
      await navigate(-2);
    },
    onError: (error) => {
      console.error('프로젝트 수정 실패:', error);
      alert('프로젝트 수정 실패');
    },
  });

  useEffect(() => {
    if (projectQuery.isSuccess && projectQuery.data) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...projectQuery.data,
      }));
    }
  }, [projectQuery.isSuccess, projectQuery.data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'members' || 'imageUrls' ? value.split(',') : value,
    });
  };

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (projectQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (projectQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (projectQuery.isSuccess) {
    console.log(formData);
    return (
      <div className={styles['container']}>
        <form onSubmit={HandleSubmit}>
          <h2>프로젝트 게시글 작성</h2>

          <label htmlFor="semester">학기</label>
          <input
            type="number"
            id="semester"
            name="semester"
            placeholder="진행된 학기를 입력하세요 (예: 24-2)"
            value={formData.semester}
            readOnly
            onChange={handleChange}
          />
          <br />
          <label htmlFor="teamName">팀 이름</label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            placeholder="팀 이름을 입력하세요"
            value={formData.teamName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="title">서비스 이름</label>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            placeholder="서비스 이름을 입력하세요"
            value={formData.serviceName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="content">내용</label>
          <input
            type="text"
            id="content"
            name="content"
            placeholder="내용을 입력하세요"
            value={formData.content}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="gitHubUrl">GitHub 주소</label>
          <input
            type="text"
            id="gitHubUrl"
            name="gitHubUrl"
            placeholder="깃허브 주소를 입력하세요"
            value={formData.gitHubUrl}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="serviceUrl">서비스 URL</label>
          <input
            type="text"
            id="serviceUrl"
            name="serviceUrl"
            placeholder="서비스 주소를 입력하세요"
            value={formData.serviceUrl}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="members">팀원</label>
          <input
            type="text"
            id="members"
            name="members"
            placeholder="팀원들의 이름을 입력하세요"
            value={formData.members.join(',')}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="imageUrls">이미지 주소</label>
          <input
            type="text"
            id="imageUrls"
            name="imageUrls"
            placeholder="이미지 주소"
            value={formData.imageUrls.join(',')}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="프로젝트 수정" />
        </form>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ProjectEdit;
