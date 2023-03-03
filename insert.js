const dbconnect = require('./mongodb');

const insert = async () => {
    const db = await dbconnect();
    const result = await db.insertOne({
        title: 'howu',
        author: 'Utkarsh Singh',
        pages: 400,
        genres: ['love', 'hate', 'anger'],
        rating: 10.0
    })
}
insert()