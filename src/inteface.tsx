import { ReactNode } from "react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProjectsCardProps {
  ProjectImg: string;
  title: string;
}
export interface TabComponentProps {
  title: string;
  description: string;
}

export interface SlideWithAnimationProps {
  image: string;
  title: string;
  description: string;
}
