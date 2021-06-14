function dataReader(sample) {
    d3.json("samples.json").then((data) => {
        console.log(data);

        var metadata = data.metadata;
        console.log(metadata);

        var samples = data.samples.filter(target =>
            target.id.toString() === id)[0];
        console.log(`Samples: ${samples}`);

        var washfreq = data.metadata.map(wash => wash.wfreq);
        console.log(`Washing Frequency: ${washfreq}`);
    })
}