const fs = require('fs');
const unzipper = require('unzipper');
const xmlParser = require('xml2json');

const bookArr = fs.readdirSync(process.argv[2]);

let count = 0;

const bookInfo = [];

bookArr.forEach(book => {
  const stream = fs.createReadStream(`./epubs/${book}`);
  stream.pipe(unzipper.Parse()).on('entry', function(entry) {
    var fileName = entry.path;
    if (fileName === 'OEBPS/content.opf') {
      let data = '';
      entry.on('data', chunk => (data += chunk)).on('end', () => {
        const bookJson = JSON.parse(xmlParser.toJson(data));
        const metadata = bookJson.package.metadata;
        const returnObj = {
          title: metadata['dc:title'],
          author: metadata['dc:creator']['$t'],
          slug: book.slice(0, book.length - 5),
        };
        count++;
        bookInfo.push(returnObj);
        if (count === bookArr.length) {
          console.log(bookInfo);
        }
      });
    } else {
      entry.autodrain();
    }
  });
});
