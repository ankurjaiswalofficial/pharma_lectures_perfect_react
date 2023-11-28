const path = require('path');

export default function getJsonBySemAndSubject(sem, subject_name) {
  const jsonDir = path.join(__dirname, 'jsons', 'notes', sem, subject_name);
  try {
    const jsonFilePath = path.join(jsonDir, `${subject_name}.json`);
    return require(jsonFilePath);
  } catch (error) {
    console.error(`Error loading JSON for sem ${sem} and subject ${subject_name}:`, error);
    return null;
  }
}
