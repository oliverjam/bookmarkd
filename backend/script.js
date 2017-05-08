const fs = require('fs');
const unzipper = require('unzipper');
const xmlParser = require('xml2json');
const uuid = require('uuid/v4');
const stdio = require('stdio');

let dir = '.';
stdio.question('Enter path of directory you want to read', (err, res) => {
  if (err) throw err;
  makeBookArr(res);
});

function makeBookArr(dir) {
  const bookArr = fs.readdirSync(dir);

  let count = 0;

  const bookInfo = [];

  bookArr.forEach(book => {
    const stream = fs.createReadStream(`${dir}/${book}`);
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
            id: uuid(),
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
}
