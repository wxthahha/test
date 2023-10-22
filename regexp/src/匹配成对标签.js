export function doubleTag(str) {
    return /<([^>]*)>.*(<\/\1>)/g.test(str);Ï
}