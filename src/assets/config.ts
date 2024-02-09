export const cv: any = [
    {
        title: "Practicas en empresa",
        interval: "2022 - Actualidad",
        description: "Desarrollo de API REST con Java, Spring Boot, Node.js, Express, etc.",
        languages: ["Java", "Swift", "Angular", "Python"]
    },
    {
        title: "Desarrollador App Móviles",
        interval: "2022 - Actualidad",
        description: "Desarrollo de aplicaciones móviles con Java, Angular, Ionic, Firebase, Swift, Kotlin, Flutter, React Native, etc."
    },
    {
        title: "IES Carmen y Severo Ochoa",
        interval: "2020 - 2022",
        description: "Bachiller cientifico tecnológico"
    }
]

export const languages: any = [
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
        "name": "Node.js",
        "icon": "icons/nodejs.svg"
    },
    {
        "id": 10,
        "name": "React",
        "icon": "icons/react.svg"
    },
    {
        "id": 11,
        "name": "Vue",
        "icon": "icons/vue.svg"
    },
    {
        "id": 12,
        "name": "VS Code",
        "icon": "icons/vs_code.svg"
    },
    {
        "id": 13,
        "name": "IntelliJ IDEA",
        "icon": "icons/jb_IntelliJ_IDEA.svg"
    },
    {
        "id": 13,
        "name": "Pycharm",
        "icon": "icons/jb_pycharm.svg"
    },
    {
        "id": 14,
        "name": "NodeJs",
        "icon": "icons/node_js.svg"
    },
    {
        "id": 15,
        "name": "NPM",
        "icon": "icons/npm.svg"
    }
]

export const getLenguageByName = (name: string) => {
    return languages.find((language: any) => language.name === name);
}