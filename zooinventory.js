function zooInventory(array){
    let flatArray = [];
    for (let i = 0; i < array.length; i++){
        let element = array[i];
        if (Array.isArray(element)){
            flatArray = flatArray.concat(element);
        }
        else{
            flatArray.push(element);
        } 
    }
    return flatArray;
    console.log(flatArray);
}

let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];



