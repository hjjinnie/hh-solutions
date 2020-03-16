const cachePromiseFunction = get => {
  const cache = {};
​
  // returns a memoized version of our input function
  return url => {
    // returns a promise with the resolved value
    if (cache.hasOwnProperty(url)) return Promise.resolve(cache[url]);
    
    else return get(url).then(data => {
      cache[url] = data;
      return data;
    });
  };
