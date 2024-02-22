import { Token } from "@angular/compiler";
import { UserComponent } from "src/app/user/user.component";

const production = true;
let url = "";

if (production) {
    url = "https://api.pabloeguilaz.es";
} else {
    url = "http://localhost:8888";
}

export const getStack = async() => {
    try {
        const response = await fetch('https://pabloeguilazperez.github.io/PabloEguilazPerez/stack.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getResume = async() => {
    try {
        const response = await fetch('https://pabloeguilazperez.github.io/PabloEguilazPerez/resume.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getCompetencies = async() => {
    try {
        const response = await fetch('https://pabloeguilazperez.github.io/PabloEguilazPerez/competencies.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getTools = async() => {
    try {
        const response = await fetch('https://pabloeguilazperez.github.io/PabloEguilazPerez/tools.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getChangelog = async() => {
    try {
        const response = await fetch('https://pabloeguilazperez.github.io/PabloEguilazPerez/changelog.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getChangelogById = async(id: string) => {
    try {
        const response = await fetch(`https://pabloeguilazperez.github.io/PabloEguilazPerez/changelog/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getToolById = async(id: number) => {
    try {
        const response = await fetch(`https://pabloeguilazperez.github.io/PabloEguilazPerez/tools/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const loginUser = async(email: string, password: string) => {
    try {

        const headers = new Headers();
        headers.append("clientID", "76a384351ab5f38441e18e3c97033");

        const raw = JSON.stringify({
            "option": "login",
            "email": email,
            "password": password
        });

        const requestOptions = {
            headers: headers,
            method: "POST",
            body: raw,
        };

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getGitHubUser = async(code: string) => {

    try {

        const headers = new Headers();
        headers.append("clientID", "76a384351ab5f38441e18e3c97033");

        const raw = JSON.stringify({
            option: "get_github_user",
            code: code
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: raw,
        };

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }

}

export const updateUser = async(token:string, dato:string, valor:string|any) => {
    try {

        const headers = new Headers();
        headers.append("token", token);
        headers.append("clientID", "76a384351ab5f38441e18e3c97033");

        const raw = JSON.stringify({
            option: "update_user",
            dato: dato,
            valor: valor
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: raw,
        };

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const updateUserData = async(token:string, clave:string, valor:any) => {

    try {

        const headers = new Headers();
        headers.append("token", token);
        headers.append("clientID", "76a384351ab5f38441e18e3c97033");

        const raw = JSON.stringify({
            option: "update_user_data",
            clave: clave,
            valor: valor
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: raw,
        };

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }

}