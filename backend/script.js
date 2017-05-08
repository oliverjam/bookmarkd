const fs = require('fs');
const unzipper = require('unzipper');
const xmlParser = require('xml2json');
const uuid = require('uuid/v4');
const stdio = require('stdio');

stdio.question('Enter path of directory you want to read', (err, directory) => {
  if (err) throw err;
  stdio.question('Enter the path for result', (error, filePath) => {
    if (error) throw error;
    makeBookArr(directory, filePath);
  });
});

function makeBookArr(dir, filePath = './book-array.js') {
  const bookArr = fs.readdirSync(dir);

  const bookInfo = [];

  bookArr.forEach(book => {
    const stream = fs.createReadStream(`${dir}/${book}`);
    stream.pipe(unzipper.Parse()).on('entry', function(entry) {
      var fileName = entry.path;
      if (fileName.endsWith('content.opf')) {
        let data = '';
        entry
          .on('data', chunk => (data += chunk))
          .on('end', () => {
            const bookJson = JSON.parse(xmlParser.toJson(data));
            const metadata = bookJson.package.metadata;
            if (metadata['dc:creator'] && !metadata['dc:creator']['$t']) {
              metadata['dc:creator']['$t'] = metadata[
                'dc:creator'
              ].reduce((a, e, i) => {
                let accumulate = a + e['$t'];
                if (i !== metadata['dc:creator'].length - 1) {
                  accumulate += ' & ';
                }
                return accumulate;
              }, '');
            }
            const returnObj = {
              title: metadata['dc:title'],
              author: metadata['dc:creator']
                ? metadata['dc:creator']['$t']
                : 'unknown',
              slug: book.slice(0, book.length - 5),
              id: uuid(),
            };
            bookInfo.push(returnObj);

            if (bookInfo.length === bookArr.length) {
              fs.writeFile(filePath, JSON.stringify(bookInfo), err => {
                if (err) throw err;
                console.log(`Your array has been written to ${filePath}!`);
              });
            }
          })
          .on('error', err => console.log(err));
      } else {
        entry.autodrain();
      }
    });
  });
}
