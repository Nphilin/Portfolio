export interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  linkGithub: string;
  linkDeploy?: string;
  papel?: string; // 'Desenvolvedor Principal' | 'Co-participante'
}

export interface CadeiraEstudo {
  nome: string;
  descricao?: string;
}

export interface PeriodoAcademico {
  periodo: string;
  status: 'Concluído' | 'Em Andamento' | 'Futuro';
  cadeiras: CadeiraEstudo[];
}

export interface CasoEstudo {
  tecnologia: string;
  categoria: string;
  status: 'Em Foco' | 'Futuro Objetivo' | 'Concluído';
  descricao: string;
}
