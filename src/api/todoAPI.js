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

export const getTodo = async (tno) => {

    const res = await axios.get(`${server}${tno}`)

    return res.data

}

export const removeTodo = async (tno) => {

    const res = await axios.delete(`${server}${tno}`)

    return res.data

}

export const putTodo = async (todo) => {

    const res = await axios.put(`${server}${todo.tno}`, todo)

    return res.data

}