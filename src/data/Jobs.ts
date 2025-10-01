/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    {
        title: "Data Analyst",
        startDate: "2025-07-10",
        company: "Commodo",
        location: "Barranquilla, Atlántico, Colombia",
        description: "Diseñar y mantener pipelines de datos robustos y escalables, asegurando información confiable y oportuna para el negocio. Colaborar con equipos multidisciplinarios para integrar procesos analíticos, optimizar modelos de datos y garantizar su consistencia y calidad. Supervisar procesos ETL, maximizando su eficiencia y funcionamiento, mientras desarrollo reportes y dashboards interactivos en Power BI para transformar datos en insights accionables. Automatizar procesos y análisis avanzados utilizando SQL, Python y soluciones cloud (AWS/GCP), contribuyendo a la evolución del ecosistema tecnológico. Promover buenas prácticas en arquitectura de datos y visualización, alineadas con los objetivos estratégicos de la compañía.",
        goals: [
            "⚙️ Diseñar y mantener pipelines de datos robustos y escalables, asegurando información confiable y oportuna para el negocio.",
            "🤝 Colaborar con equipos multidisciplinarios para integrar procesos analíticos, optimizar modelos de datos y garantizar su consistencia y calidad.",
            "🔄 Supervisar procesos ETL, maximizando su eficiencia y funcionamiento, mientras desarrollo reportes y dashboards interactivos 📈 en Power BI para transformar datos en insights accionables.",
            "🤖 Automatizar procesos y análisis avanzados utilizando SQL, Python y soluciones cloud (AWS/GCP), contribuyendo a la evolución del ecosistema tecnológico.",
            "🌐 Promover buenas prácticas en arquitectura de datos y visualización, alineadas con los objetivos estratégicos de la compañía."
        ],
        currentJob: true,
    },
    {
        title: "Analista de Inteligencia de Negocios",
        startDate: "2023-11-01",
        endDate: "2025-07-09",
        company: "Expreso Brasilia S.A",
        location: "Barranquilla, Colombia",
        description: "🚀 Desarrollo y gestiono soluciones integradas para centralizar herramientas y mejorar la eficiencia en la toma de decisiones. ⚙️ Implemento procesos de ETL y estrategias de automatización para optimizar tiempos de análisis y reducir errores en la gestión de datos. 🔍 Identifico fuentes clave de información para indicadores estratégicos y financieros, detectando anomalías y patrones de valor para el negocio. 📊 Transformo datos en informes dinámicos y dashboards en Power BI, asegurando visualizaciones claras para la toma de decisiones. 💡 Proporciono insights estratégicos basados en análisis de datos, contribuyendo a decisiones de alto impacto en la alta gerencia. ☁️ Exploro y aplico tecnologías innovadoras en almacenamiento y procesamiento en la nube para mejorar la escalabilidad y rendimiento de los datos. 🛠️ Diseño e implemento modelos de datos y herramientas analíticas para optimizar la gestión empresarial.",
        goals: [
            "🚀 Desarrollar y gestionar soluciones integradas para centralizar herramientas y mejorar la eficiencia en la toma de decisiones.",
            "⚙️ Implementar procesos de ETL y estrategias de automatización para optimizar tiempos de análisis y reducir errores en la gestión de datos.",
            "🔍 Identificar fuentes clave de información para indicadores estratégicos y financieros, detectando anomalías y patrones de valor para el negocio.",
            "📊 Transformar datos en informes dinámicos y dashboards en Power BI, asegurando visualizaciones claras para la toma de decisiones.",
            "💡 Proporcionar insights estratégicos basados en análisis de datos, contribuyendo a decisiones de alto impacto en la alta gerencia.",
            "☁️ Explorar y aplicar tecnologías innovadoras en almacenamiento y procesamiento en la nube para mejorar la escalabilidad y rendimiento de los datos.",
            "🛠️ Diseñar e implementar modelos de datos y herramientas analíticas para optimizar la gestión empresarial."
        ],
        currentJob: false,
    },
    {
        title: "Administrativo de Proyectos y Procesos de Negocio",
        startDate: "2023-09-01",
        endDate: "2023-11-01",
        company: "Expreso Brasilia S.A",
        location: "Barranquilla, Colombia",
        description: "🏢 Implementé actividades para transformar la cultura organizacional hacia una gestión por procesos alineada con la estrategia del negocio y el enfoque al cliente. 📈 Levanté y analicé procesos asignados, identificando oportunidades de mejora y optimización. 🔄 Gestioné cambios en los procesos, asegurando su correcta implementación y aceptación por los equipos involucrados. 📊 Realicé seguimiento a los procesos para garantizar su evolución y madurez en la gestión por procesos de la compañía. 🛡️ Brindé soporte en la gestión de riesgos de los procesos, identificando y mitigando posibles riesgos para cumplir con los estándares de seguridad. 🔔 Contribuí a la transformación organizacional hacia una cultura de gestión del riesgo, promoviendo prácticas y políticas de prevención en todos los niveles. 📏 Medí y evalué el desempeño de los procesos mediante indicadores clave para identificar áreas de mejora y oportunidades de eficiencia. 🤝 Brindé soporte a proyectos estratégicos, asegurando que los cambios en los procesos se alinearan con las necesidades del negocio.",
        goals: [
            "🏢 Transformar la cultura organizacional hacia una gestión por procesos alineada con la estrategia del negocio y el enfoque al cliente.",
            "📈 Levantar y analizar procesos asignados, identificando oportunidades de mejora y optimización.",
            "🔄 Gestionar cambios en los procesos, asegurando su correcta implementación y aceptación por los equipos involucrados.",
            "📊 Realizar seguimiento a los procesos para garantizar su evolución y madurez en la gestión por procesos de la compañía.",
            "🛡️ Brindar soporte en la gestión de riesgos de los procesos, identificando y mitigando posibles riesgos.",
            "🔔 Contribuir a la transformación organizacional hacia una cultura de gestión del riesgo, promoviendo prácticas y políticas de prevención.",
            "📏 Medir y evaluar el desempeño de los procesos mediante indicadores clave para identificar áreas de mejora y oportunidades de eficiencia.",
            "🤝 Brindar soporte a proyectos estratégicos, asegurando que los cambios en los procesos se alinearan con las necesidades del negocio."
        ],
        currentJob: false,
    },
    {
        title: "Estudiante en prácticas – Gestión de Recaudo",
        startDate: "2021-12-01",
        endDate: "2022-06-01",
        company: "Triple A S.A E.S.P",
        location: "Barranquilla, Colombia",
        description: "💼 Gestioné el recaudo de grandes clientes, a través de la generación agrupada de facturas masivas desde el software. 📊 Implementé reportes y herramientas en Excel para validación de pagos de clientes y conciliación de pagos por serial de medidor.",
        goals: [
            "💼 Gestionar el recaudo de grandes clientes mediante la generación agrupada de facturas masivas desde el software.",
            "📊 Implementar reportes y herramientas en Excel para validación de pagos de clientes.",
            "🔢 Conciliar pagos por serial de medidor."
        ],
        currentJob: false,
    }
];
export default workExperience;