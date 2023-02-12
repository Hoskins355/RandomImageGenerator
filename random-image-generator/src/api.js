import deepai from 'deepai';
deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

export async function fetchRandomImage(searchTerm, style) {
    console.log("searchTerm ", searchTerm)
    const res = await deepai.callStandardApi(style, {
        text: searchTerm,
        grid_size: "1" // number of images we want returned
    });
    console.log(res);
    return res
}

