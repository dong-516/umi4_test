import * as request from '../../../utils/request';

export const getProductLst = (params:any)=>{
    return request.get('/api/v1/iot/iotProductInfos',{params});
}