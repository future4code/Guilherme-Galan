import axios, { AxiosResponse } from 'axios'

const arg1 = process.argv[2]
const arg2 = process.argv[3]
const arg3 = process.argv[4]

const baseUrl:string =  "https://jsonplaceholder.typicode.com/posts/"

const firstPromise: Promise<AxiosResponse> = axios.get(baseUrl + arg1.toString())
const secondPromise: Promise<AxiosResponse> = axios.get(baseUrl + arg2.toString())
const thirdPromise: Promise<AxiosResponse> = axios.get(baseUrl + arg3.toString())

Promise.all([firstPromise, secondPromise, thirdPromise]).then((result:AxiosResponse[]) => {
    result.map(post =>{
        console.log("Titulo do Post: ", post.data.title)
    })
}).catch(err => {
    console.log(err)
})