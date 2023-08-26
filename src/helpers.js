const getCurrentEndpoint = (url) => {;
    return url.split("/").slice(1);
}

export {getCurrentEndpoint};