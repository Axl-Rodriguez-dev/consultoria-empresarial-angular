export interface Service {
  id: string;
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  featured: boolean;
  hasDetail: boolean;
  category: string | null;
  titleAccent: string | null;
  heroGradient: string | null;
  lead: string | null;
  methodology: string | null;
  techStack: string[];
  process: ProcessStep[];
  featuresDetail: FeatureDetail[];
}

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
}

export interface FeatureDetail {
  icon: string;
  title: string;
  desc: string;
}

export interface ContactInfo {
  email: string;
  telefono: string;
  direccion: string;
  horario: {
    lunes_viernes: string;
    sabado: string;
    domingo: string;
  };
}
