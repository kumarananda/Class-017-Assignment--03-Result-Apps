/**
 * 
 * @param {key name on localdtorage} key 
 * @param {Array data which convart to string and send on localstorage} Arr 
 */
function dataSend(key, Arr) {
    let data = JSON.stringify(Arr);
    localStorage.setItem(key, data)
};

/**
 * 
 * @param {data from localstorage vai key name} key 
 * @returns 
 */
function dataGet(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];

}


