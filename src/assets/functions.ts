export const getStack = async() => {
    try {
        const response = await fetch('https://pabloeguilazperez.github.io/PabloEguilazPerez/stack.json');
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
        console.log(data);
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
        console.log(data);
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
        console.log(data);
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
        console.log(data);
        return data;
    } catch (error) {
        console.error('There was a problem with fetching the data:', error);
        return null;
    }
}