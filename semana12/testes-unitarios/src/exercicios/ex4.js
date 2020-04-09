export function removeItensDuplicados(array) {

    const newArray = array.filter((item,index,self) => {
        return self.indexOf(item) === index
    })
        return newArray
}
