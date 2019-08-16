import {
    http
} from './config'

export default {
    getDevice: (brand, deviceName) => {
        return http.get('getdevice', {
            params: {
                token: 'df3456f28354fda4f4fd7c4310bcd023842d9ff496467905',
                brand: brand,
                device: deviceName,
                position: 0
            }
        });
    },

    listDevices: (brand, limit) => {
        return http.get('getlatest', {
            params: {
                token: 'df3456f28354fda4f4fd7c4310bcd023842d9ff496467905',
                brand: brand,
                limit: limit
            }
        })
    }
}