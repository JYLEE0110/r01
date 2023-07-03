import axios from "axios"

/* api 기본 url */
const server = "http://localhost:8080/api/todos/"

/* 반환은 promise */
export const getList = async() => {

    const res = await axios.get(`${server}list`)

    return res.data

}

export const postTodo = async(todo) => {

    const res = await axios.post(`${server}`, todo)

    return res.data

}