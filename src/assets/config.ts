export const getStack = () => {
    fetch('https://pabloeguilazperez.github.io/PabloEguilazPerez/stack.json')
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson
    })
    .catch((error) => {
        console.error(error);
    });
}