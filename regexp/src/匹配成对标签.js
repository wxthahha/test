export function doubleTag(str) {
    return /<([^>]*)>[\d\D]*(<\/\1>)/g.test(str);Ï
}