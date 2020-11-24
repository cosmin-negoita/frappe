const colors = [
    {"--gray-0": "#FFFFFF"},
    {"--gray-1": "#EDF1F2"},
    {"--gray-2": "#DFE5E8"},
    {"--gray-3": "#D1D9DE"},
    {"--gray-4": "#64747A"},
    {"--gray-5": "#242E33"},
    {"--brand": "#FF7B5E"},
    {"--brand-light": "#FFECE8"},
    {"--brand-dark": "#E15D40"},
    {"--error": "#E55151"},
    {"--error-bg": "#FFE5E5"}
];

colors.map(color => {
    document.documentElement.style.setProperty(Object.keys(color)[0], Object.values(color)[0]);
});

export function getColor(str) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(str);
    return value;
}