const fs = require("fs")

let theme = JSON.parse(fs.readFileSync("config/settings.json", "utf-8")).preferences.theme;

let filterTheme = (conf) => {
    return conf.id == theme.current
}

if (JSON.stringify(theme.installed.filter(filterTheme)) != "[]") {
    let currentTheme = theme.installed.filter(filterTheme)[0].setting;
    let content = `.titlebar {background: ${currentTheme.titlebar.background} !important;}.titlebar button {
    color: ${currentTheme.titlebar.color} !important;}.titlebar button.btn-hover:hover {
    background-color: ${currentTheme.titlebar.buttonHoverColor}} body {
    background: ${currentTheme.app.background};
    color: ${currentTheme.app.color}}.themeable{background-color:${currentTheme.app.elementBackground} !important;color:${currentTheme.app.color}!important}`.trim()
    let write = fs.writeFileSync("frontend/css/theme.css", content)
} else {
    alert("Sorry, your applied theme wasn't found. Try installing it from the marketplace.")
}