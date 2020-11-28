const colors = [
    {"--gray-0": "#FFFFFF"},
    {"--gray-1": "#F3F5FA"},
    {"--gray-2": "#DAE0EB"},
    {"--gray-3": "#C4CCDB"},
    {"--gray-4": "#7F8CA6"},
    {"--gray-5": "#2D384E"},
    {"--brand": "#6C7BFF"},
    {"--brand-light": "#E9EBFF"},
    {"--brand-dark": "#4B5BE1"},
    {"--error": "#FF5D8D"},
    {"--error-bg": "#FFEEF3"}
];

colors.map(color => {
    document.documentElement.style.setProperty(Object.keys(color)[0], Object.values(color)[0]);
});

export function getColor(str) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(str);
    return value;
}