export const resume: any = [
    {
        id: 1,
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
        id: 3,
        title: "Bachiller cientifico tecnológico",
        place: "IES Carmen y Severo Ochoa",
        interval: "2020 - 2022",
        short_description: "IES Carmen y Severo Ochoa"
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



export const getLenguageByName = (name: string) => {
    return tools.find((tool: any) => tool.name === name);
}