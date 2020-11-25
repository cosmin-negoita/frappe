const colors = [
    {"--gray-0": "#FFFFFF"},
    {"--gray-1": "#EDF1F2"},
    {"--gray-2": "#DFE5E8"},
    {"--gray-3": "#D1D9DE"},
    {"--gray-4": "#64747A"},
    {"--gray-5": "#242E33"},
    {"--brand": "#A55EFF"},
    {"--brand-light": "#FFE1FF"},
    {"--brand-dark": "#8740E1"},
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