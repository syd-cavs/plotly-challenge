function dataReader(sample) {
    d3.json("samples.json").then((data) => {
        //console.log(data);

        var metadata = data.metadata;
        console.log(metadata);

        var results = metadata.filter(datameta =>
            datameta.id.toString() === sample)[0];
        //console.log(results);

        var demographic = d3.select('#sample-metadata');
        demographic.html("");

        Object.entries(result).forEach((key) => {   
            demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n"); 
        });
    });
};

function grabData(grabber) {
    d3.json("samples.json").then((grabbeddata) => {
        console.log(grabbeddata);

        var metadata = grabbeddata.metadata;
        console.log(metadata);

        var samples = grabbeddata.samples.filter(target =>
            target.id.toString() === id)[0];
        console.log(`Samples: ${samples}`);

        var topten = samples.sample_values.slice(0, 10).reverse();
        console.log(`Top Ten: ${topten}`); 

        var washfreq = grabbeddata.metadata.map(wash => wash.wfreq);
        console.log(`Washing Frequency: ${washfreq}`);

        var OTUtopten = (samples.otu_ids.slice(0, 10)).reverse();
        console.log(`Top Ten OTU IDs: ${OTUtopten}`);

        var OTUids = OTUtopten.map(uto => "OTU" + uto)
        console.log(`OTU Desired Form: ${OTUids}`);
    })
};