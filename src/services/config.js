import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://fonoapi.freshpixl.com/v1/'
})