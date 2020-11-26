const colors = [
    {"--gray-0": "#FFFFFF"},
    {"--gray-1": "#F7F3F1"},
    {"--gray-2": "#F1E9E5"},
    {"--gray-3": "#E1D8D3"},
    {"--gray-4": "#907B71"},
    {"--gray-5": "#4E382D"},
    {"--brand": "#EB8348"},
    {"--brand-light": "#FFE9DC"},
    {"--brand-dark": "#B46538"},
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