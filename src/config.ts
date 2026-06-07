export const SITE = {
    website: "", // aún no tienes sitio web
    title: "Juan Camilo Dams | Inteligencia de Negocios.",
    description: "Portafolio profesional de Juan Camilo Dams, especialista en inteligencia de negocios y análisis de datos.",
    tags: ["inteligencia de negocios", "business intelligence", "analítica de datos", "data analysis", "portafolio", "Juan Dams"],
    ogImage: "/og-image.webp",
    logo: "logo",
    logoText: "Portafolio",
    lang: "es",
    favicon: "/favicon.png",
    repository: "",
    author: "Juan Dams",
    profile: "https://www.linkedin.com/in/juancdams/",
}

type ProfileFact = {
    value: number;
    description: string;
};

export const ME = {
    name: "Juan Camilo Dams",
    profession: "Ingeniero Industrial | Inteligencia de Negocios",
    profileImage: "profilepic.jpg",
    profileFacts: [
        // {
        //     value: 3,
        //     description: "Años de Experiencia"
        // },
    ] as ProfileFact[],
    contactInfo: {
        email: "juancadams1@gmail.com",
        linkedin: "https://www.linkedin.com/in/juancdams/",
        resumeDoc: "resume.pdf",
    },
    aboutMe: "Ingeniero Industrial con experiencia en Análisis de Datos e Inteligencia de Negocios, con habilidades en procesos de ETL, automatización de procesos y visualización con Power BI y otras herramientas. He trabajado en áreas de Tecnología, Planeación y Gestión Organizacional, optimizando la toma de decisiones a través del análisis de datos y el desarrollo de soluciones estratégicas. Además, cuento con más de 10 años de experiencia en liderazgo en proyectos sociales, académicos y humanitarios implementando nuevas tecnologías, metodologías de planificación y análisis de datos.",
}

export const SOCIALS = [
    {
        name: "Twitter",
        url: "https://x.com/juandams_",
        icon: "twitter-x-fill",
        show: true
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/Jdams01",
        icon: "facebook-fill",
        show: false
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/jdams.tech/?hl=es",
        icon: "instagram-fill",
        show: true
    },
    {
        name: "Youtube",
        url: "https://www.youtube.com/vicbox.dev",
        icon: "youtube-fill",
        show: false
    },
    {
        name: "TikTok",
        url: "https://tiktok.com/vicbox.dev",
        icon: "tik-fill",
        show: false
    },
    {
        name: "GitHub",
        url: "https://github.com/juankdams",
        icon: "github-fill",
        show: true
    }
]