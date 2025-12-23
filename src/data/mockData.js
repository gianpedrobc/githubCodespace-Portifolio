// Mock data baseado nos modelos Django

export const apresentacao = {
  nome: "Gian Pedro",
  titulo: "Desenvolvedor Web & DevSecOps",
  descricao: "Apaixonado por desenvolvimento web e segurança. Criando soluções inovadoras com tecnologia de ponta.",
  imagem: "https://via.placeholder.com/400x400?text=Gian+Pedro",
  link_contato: "#contato"
};

export const skills = [
  {
    id: 1,
    categoria: "Linguagens",
    habilidades: "JavaScript, Python, HTML, CSS, Java, TypeScript"
  },
  {
    id: 2,
    categoria: "Frameworks & Bibliotecas",
    habilidades: "React, Django, Vue.js, Express.js, FastAPI"
  },
  {
    id: 3,
    categoria: "DevOps & Segurança",
    habilidades: "Docker, Kubernetes, AWS, Git, CI/CD, Linux"
  },
  {
    id: 4,
    categoria: "Ferramentas & Tecnologias",
    habilidades: "PostgreSQL, MongoDB, Git, GitHub, VS Code, Figma"
  }
];

export const projetos = [
  {
    id: 1,
    titulo: "E-commerce Platform",
    descricao: "Plataforma de e-commerce completa com sistema de pagamento e gerenciamento de produtos.",
    tags: "React, Node.js, MongoDB",
    imagem: "https://via.placeholder.com/300x200?text=E-commerce",
    link: "https://github.com/gianpedrobc"
  },
  {
    id: 2,
    titulo: "Sistema de Gerenciamento",
    descricao: "Sistema web para gerenciamento de tarefas e projetos com autenticação avançada.",
    tags: "Django, PostgreSQL, React",
    imagem: "https://via.placeholder.com/300x200?text=Gerenciamento",
    link: "https://github.com/gianpedrobc"
  },
  {
    id: 3,
    titulo: "API REST Segura",
    descricao: "API REST com autenticação JWT, validação de dados e documentação automática.",
    tags: "FastAPI, Python, PostgreSQL",
    imagem: "https://via.placeholder.com/300x200?text=API+REST",
    link: "https://github.com/gianpedrobc"
  },
  {
    id: 4,
    titulo: "Dashboard Analytics",
    descricao: "Dashboard interativo com gráficos em tempo real e análise de dados.",
    tags: "React, D3.js, Express",
    imagem: "https://via.placeholder.com/300x200?text=Dashboard",
    link: "https://github.com/gianpedrobc"
  }
];

export const certificados = [
  {
    id: 1,
    emissor: "freeCodeCamp",
    titulo: "Responsive Web Design",
    competencias: "HTML, CSS, Design Responsivo",
    link: "https://freecodecamp.org"
  },
  {
    id: 2,
    emissor: "Udemy",
    titulo: "The Complete JavaScript Course",
    competencias: "JavaScript, DOM, APIs",
    link: "https://udemy.com"
  },
  {
    id: 3,
    emissor: "Coursera",
    titulo: "Python for Everybody",
    competencias: "Python, Programação Orientada a Objetos",
    link: "https://coursera.org"
  },
  {
    id: 4,
    emissor: "LinkedIn Learning",
    titulo: "DevOps Essentials",
    competencias: "Docker, CI/CD, Cloud",
    link: "https://linkedin.com"
  }
];

export const sobreMim = {
  titulo: "Sobre mim",
  descricao: "Sou um desenvolvedor web apaixonado por criar soluções inovadoras e seguras. Com experiência em desenvolvimento full-stack, DevOps e segurança, ajudo empresas a transformar suas ideias em produtos de alta qualidade. Quando não estou codificando, estou estudando novas tecnologias e compartilhando conhecimento com a comunidade.",
  imagem: "https://via.placeholder.com/400x500?text=Sobre+Mim"
};

export const siteProps = {
  name: apresentacao.nome,
  title: apresentacao.titulo,
  email: "gian@example.com",
  gitHub: "gianpedrobc",
  instagram: "gianpedrobc",
  linkedIn: "gianpedrobc",
  medium: "gianpedrobc",
  twitter: "gianpedrobc",
  youTube: "gianpedrobc"
};

export const colors = {
  primary: "#4E567E",
  secondary: "#D2F1E4"
};
