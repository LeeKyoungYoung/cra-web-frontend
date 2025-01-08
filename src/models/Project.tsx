interface Project {
  id: number;
  semester: string;
  teamName: string;
  serviceName: string;
  content: string;
  gitHubUrl: string;
  serviceUrl: string;
  members: string[];
  imageUrls: string[];
  deleted: true;
  createAt: Date;
  updatedAt: Date;
}

export type { Project };
