
const production = false;
let url = "";

if (production) {
    url = "https://app.pabloeguilaz.es";
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
        headers.append("clientID", "QPw67KYWNvfpvbbMyt");
        headers.append("Content-Type", "application/json");

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
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}

export const getGitHubUser = async(code: string) => {

    try {

        const raw = JSON.stringify({
            "code": code
        });

        const requestOptions = {
            method: "POST",
            body: raw,
        };

        const response = await fetch("https://app.pabloeguilaz.es/github.php", requestOptions)
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