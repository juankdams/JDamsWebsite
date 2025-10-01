interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Astro",
    description: "Generador de sitios estáticos para construir sitios web modernos.",
    icon: "astro_dark"
  },
  {
    name: "React",
    description: "Librería para construir interfaces de usuario.",
    icon: "react"
  },
  {
    name: "Laravel (PHP)",
    description: "Framework de PHP para el desarrollo de aplicaciones web.",
    icon: "laravel"
  },
  {
    name: "SQL (Oracle, PostgreSQL, MySQL)",
    description: "Experiencia con bases de datos relacionales: Oracle, PostgreSQL y MySQL.",
    icon: "sql"
  },
  {
    name: "KNIME",
    description: "Plataforma de análisis de datos, generación de informes e integración.",
    icon: "knime"
  },
  {
    name: "Power BI",
    description: "Servicio de análisis empresarial para visualizaciones interactivas.",
    icon: "powerbi"
  },
  {
    name: "Google Bigquery",
    description: "Almacenamiento y análisis de grandes volúmenes de datos en la nube.",
    icon: "bigquery"
  }
];

export default hardSkills;