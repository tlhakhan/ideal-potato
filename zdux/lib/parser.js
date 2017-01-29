let os = require('os');

let customAttributes = {
  server: os.hostname()
}

// zfs parser
function parser(output) {
    let datasets = {};
    // parse the dataset
    for (let line of output.split(/\n/)) {
        let words = line.split(/\t/);

        let value = Number(words[2]);

        // this logic is for converting - to string equivalent of empty string.
        // this is to avoid having property values, clones:0 or defer_destroy:0
        if (words[2] === '-') {
            value = '';
        } else if (isNaN(value)) {
            value = words[2];
        }

        if (!datasets[words[0]]) {
            Object.assign(datasets, {
                [words[0]]: {
                    [words[1]]: value
                }
            });
        } else {
            Object.assign(datasets[words[0]], {
                [words[1]]: value
            });
        }
    }
    // add custom attributes
    for(let d in datasets) {
      Object.assign(datasets[d], customAttributes);
    }

    // reduce it to an array and return
    return datasets;
}

function mnttabFileParser(data) {
    let newMounts = [];
    let lines = data.split(/\n/);
    lines.forEach(function(line) {
        let fields = line.split(/\t/);
        if (fields.length === 5) {
            newMounts.push({
                name: fields[0],
                mountPath: fields[1],
                fsType: fields[2],
                mountOptions: fields[3].split(/,/),
                mountTime: fields[4]
            });
        }
    });

    for (let e of newMounts) {
      Object.assign(e, customAttributes);
    }

    return newMounts;
}

module.exports = {
  zfsOutputParser: parser,
  zpoolOutputParser: parser,
  mnttabFileParser: mnttabFileParser
}
