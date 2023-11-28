// pages/api/data/[filePath].js

import fs from 'fs/promises';

export default async function s({params}) {
  try {
    const { filePath } = params.filePath;

    // Construct the file path based on the parameter
    const dataFilePath = `./public/jsons/syllabus/${filePath}.json`;

    // Read and parse the JSON file
    const jsonData = await fs.readFile(dataFilePath, 'utf-8').then((data) => JSON.parse(data));

    // Render the data using React components or plain HTML
    const renderedContent = `
      <div>
        <h1>${jsonData.title}</h1>
        <p>${jsonData.description}</p>
      </div>
    `;

    // Send the rendered content to the client
    res.status(200).send(renderedContent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
