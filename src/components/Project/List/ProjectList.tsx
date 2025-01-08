import { useQuery } from '@tanstack/react-query';
import { getProject } from '~/api/project';
import { QUERY_KEY } from '~/api/queryKey';
import { Project } from '~/models/Project';
import ProjectItem from '../Item/ProjectItem';

export default function ProjectList() {
  const projectQuery = useQuery<Project[]>({
    queryKey: QUERY_KEY.project.projects(),
    queryFn: async () => getProject(),
  });

  let content;

  if (projectQuery.isLoading) {
    content = <div>loading...</div>;
  } else if (projectQuery.isError) {
    content = <div>Error...</div>;
  } else if (projectQuery.isSuccess) {
    content = projectQuery.data.map((projectElement) => (
      <div>
        <ProjectItem key={projectElement.id} project={projectElement} />
      </div>
    ));
  }
  return <div>{content}</div>;
}
