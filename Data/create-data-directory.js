import fs from 'fs/promises';
import path from 'path';

async function createDataDirectoryAndFile() {
  try {
    // Create the data directory
    await fs.mkdir('data', { recursive: true });
    console.log('Data directory created successfully');

    // Create the reviews.json file with initial data
    const initialData = [
      {
        "id": "1",
        "name": "Alex Stanton",
        "role": "CEO at Bukalapak",
        "date": "21 July 2022",
        "review": "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        "rating": 5,
        "avatar": "/profill.png"
      },
      {
        "id": "2",
        "name": "Skylar Dias",
        "role": "CEO at Amazon",
        "date": "20 July 2022",
        "review": "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        "rating": 5,
        "avatar": "/profilee.png"
      }
    ];

    await fs.writeFile('data/reviews.json', JSON.stringify(initialData, null, 2));
    console.log('reviews.json file created successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

createDataDirectoryAndFile();