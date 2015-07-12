# ImgUri

Easily convert local/network image file to data uri scheme.

#### steps
- install the required libraries, npm install
- run the file node index (or) run the test case from node test/index

#### Here goes the output

![output] (https://github.com/Zakir289/ImgConverter/blob/master/DocumentedImages/output.png)


The `encode` api returns a map of file being encoded to its result. If the specified input file is larger than `4KB`, it sets an `err`, you can set `options.force` to true to encode larger files. It is generally not a good idea to encode larger image files to data-uri as it increased the page load time.

You can use `result[file].data` as source to `img` tag on html pages to load images.



