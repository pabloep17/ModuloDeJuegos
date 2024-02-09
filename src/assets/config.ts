export const resume: any = [
    {
        id: 3,
        title: "Practicas en empresa",
        place: "Empresa nº1",
        interval: "2022 - Actualidad",
        short_description: "Desarrollo de API REST con Java, Node.js, Express, etc.",
        languages: ["Java", "Swift", "Angular", "IntelliJ IDEA", "VS Code"]
    },
    {
        id: 2,
        title: "Desarrollador App Móviles",
        place: "IES Doctor Fleming",
        interval: "2022 - Actualidad",
        short_description: "Desarrollo de aplicaciones móviles con Java, Angular, Ionic, Firebase, Swift, Kotlin, Flutter, React Native, etc.",
        languages: ["Java", "Angular", "HTML5", "Css", "JS", "IntelliJ IDEA", "VS Code"]
    },
    {
        id: 1,
        title: "Bachiller cientifico tecnológico",
        place: "IES Carmen y Severo Ochoa",
        interval: "2020 - 2022",
        short_description: "IES Carmen y Severo Ochoa"
    }
]

export const competencies: any = [
    {
        id: 1,
        name: "Compromiso"
    },
    {
        id: 2,
        name: "Resolución de problemas"
    },
    {
        id: 3,
        name: "Comunicación"
    },
    {
        id: 4,
        name: "Trabajo en equipo"
    }
]

export const stack: any = [
    {
        name: "Front-end",
        languages: [
            {
                name: "Swift",
                icon: "icons/swift.svg" 
            },
            {
                name: "Angular",
                icon: "icons/angular.svg" 
            },
            {
                name: "React",
                icon: "icons/react.svg" 
            },
            {
                name: "HTML5",
                icon: "icons/html_5.svg" 
            },
            {
                name: "Css",
                icon: "icons/css_3.svg" 
            },
            {
                name: "JS",
                icon: "icons/js.svg" 
            },
            {
                name: "TS",
                icon: "icons/ts.svg" 
            },
            {
                name: "Tailwindcss",
                icon: "icons/tailwildcss.svg" 
            }
        ]
    },
    {
        name: "Back-end",
        languages: [
            {
                name: "Java",
                icon: "icons/java.svg" 
            },
            {
                name: "PHP",
                icon: "icons/php.svg" 
            },
            {
                name: "Python",
                icon: "icons/python.svg" 
            },
            {
                name: "NodeJs",
                icon: "icons/node_js.svg" 
            }
        ]
    },
    {
        name: "Bases de datos",
        languages: [
            {
                name: "MariaDB",
                icon: "icons/mariadb.svg" 
            },
            {
                name: "MongoDB",
                icon: "icons/mongodb.svg" 
            },
            {
                name: "Firebase",
                icon: "icons/firebase.svg" 
            },
            {
                name: "MySQL",
                icon: "icons/mysql.svg"
            }
        ]
    },
    {
        name: "IDEs",
        languages: [
            {
                name: " IntelliJ IDEA",
                icon: "icons/jb_IntelliJ_IDEA.svg" 
            },
            {
                name: " VS Code",
                icon: "icons/vs_code.svg" 
            },
            {
                name: "Pycharm",
                icon: "icons/jb_pycharm.svg" 
            }
        ]
    }
]

export const tools: any = [
    {
        "id": 1,
        "name": "Java",
        "icon": "icons/java.svg"  
    },
    {
        "id": 2,
        "name": "Angular",
        "icon": "icons/angular.svg"
    },
    {
        "id": 3,
        "name": "HTML5",
        "icon": "icons/html_5.svg"
    },
    {
        "id": 4,
        "name": "JS",
        "icon": "icons/js.svg"
    },
    {
        "id": 5,
        "name": "PHP",
        "icon": "icons/php.svg"
    },
    {
        "id": 6,
        "name": "Python",
        "icon": "icons/python.svg"
    },
    {
        "id": 7,
        "name": "Swift",
        "icon": "icons/swift.svg"
    },
    {
        "id": 8,
        "name": "Css",
        "icon": "icons/css_3.svg"
    },
    {
        "id": 9,
        "name": "React",
        "icon": "icons/react.svg"
    },
    {
        "id": 10,
        "name": "VS Code",
        "icon": "icons/vs_code.svg"
    },
    {
        "id": 11,
        "name": "IntelliJ IDEA",
        "icon": "icons/jb_IntelliJ_IDEA.svg"
    },
    {
        "id": 12,
        "name": "Pycharm",
        "icon": "icons/jb_pycharm.svg"
    },
    {
        "id": 13,
        "name": "NodeJs",
        "icon": "icons/node_js.svg"
    },
    {
        "id": 14,
        "name": "NPM",
        "icon": "icons/npm.svg"
    },
    {
        "id": 15,
        "name": "Xcode",
        "icon": "icons/xcode.svg"
    }
]


export const idioms: any = [
    {
        "id": 1,
        "name": "Español",
        "icon": "icons/spain.svg"
    },
    {
        "id": 2,
        "name": "Inglés",
        "icon": "icons/uk.svg"
    }
]



export const getLenguageByName = (name: string) => {
    return tools.find((tool: any) => tool.name === name);
}

export const getResumeById = (id: number) => {
    return resume.find((resume: any) => resume.id === id);
}