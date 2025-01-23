interface Project {
  id?: number;
  semester: string;
  teamName: string;
  serviceName: string;
  content: string;
  gitHubUrl: string;
  serviceUrl: string;
  members: string[];
  imageUrl: string;
  deleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { Project };
