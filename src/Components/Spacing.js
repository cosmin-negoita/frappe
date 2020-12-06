const spacing = [
    {"--su-5": "5px"},
    {"--su-10": "10px"},
    {"--su-20": "20px"},
    {"--su-30": "30px"},
    {"--su-50": "50px"},
    {"--su-100": "100px"},
    {"--radius-inner": "3px"},
    {"--radius-outer": "6px"}
];

spacing.map(su => {
    document.documentElement.style.setProperty(Object.keys(su)[0], Object.values(su)[0]);
});