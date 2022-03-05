export const capitalize = text => {
    const names = text.split(' ')
    for (let i = 0; i < names.length; i++) {
        const [firtsLetter, ...rest] = names[i]
        names[i] = firtsLetter.toUpperCase() + rest.join('').toLowerCase()
    }
    return names.join(' ')
}

export const capitalizeCamelCase = text => {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}