import axios from "axios";
import {server} from "../../config"


const addHall = async(data) => {
    return await axios.post(
        `${server}/hall`,
        data
    )
}
const getHall = async(_id) => {
    return await axios.get(
        `${server}/hall/${_id}`
    )
}
const getHalls = async() => {
    return await axios.get(
        `${server}/halls`
    )
}
const deleteHall = async(_id) => {
    return await axios.delete(
        `${server}/hall/${_id}`
    )
}


const addRoom = (data) => {
    return axios.post(
        `${server}/room`,
        data
    )
}
const deleteRoom = (_id) => {
    return axios.delete(
        `${server}/room/${_id}`
    )
}
const registerRoom = (data) => {
    return axios.put(
        `${server}/room/register`,
        data
    )
}
const removeRoom = (data) => {
    return axios.put(
        `${server}/room/unregister`,
        data
    )
}


const addProgramme = (data) => {
    return axios.post(
        `${server}/programme`,
        data
    )
}
const getProgrammes = async() => {
    return await axios.get(
        `${server}/programmes`
    )
}
const deleteProgramme = (_id) => {
    return axios.delete(
        `${server}/programme/${_id}`
    )
}


const addBlock = (data) => {
    return axios.post(
        `${server}/block`,
        data
    )
}
const getBlock = async(_id) => {
    return await axios.get(
        `${server}/block/${_id}`
    )
}
const deleteBlock = (_id) => {
    return axios.delete(
        `${server}/block/${_id}`
    )
}

export default {
    addHall,
    getHall,
    getHalls,
    deleteHall,

    addRoom,
    deleteRoom,
    registerRoom,
    removeRoom,

    addProgramme,
    getProgrammes,
    deleteProgramme,

    addBlock,
    getBlock,
    deleteBlock
}