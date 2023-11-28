export default function underscoreToTitleCase(inputString) {
    // Replace underscores with spaces
    const stringWithSpaces = inputString.replace(/_/g, " ");

    // Convert to title case
    const titleCaseString = stringWithSpaces.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    return titleCaseString;
}
