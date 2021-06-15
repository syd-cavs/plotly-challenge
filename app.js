function dataReader(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        console.log(metadata);

        var results = metadata.filter(datameta =>
            datameta.id.toString() === sample)[0];
        console.log(results);

        var demographic = d3.select('#sample-metadata');
        demographic.html("");

        Object.entries(result).forEach((key) => {
            demographic.append('h5').text(key[0])
        })


    })
};