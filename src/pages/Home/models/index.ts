import * as service from '../services/index';

import {Effect,Reducer} from 'umi';

const model = {
    namespace:'product_info',
    state:{
        productList:{}
    },
    effects:{
        *getProductLst({payload}:any,{call,put}:any){
            const {code,data} = yield call(service.getProductLst,payload);

            if(code===200){
             yield put({
                    type:'save',
                    payload:{productList:data}
                })
            }
        }
    },
    reducers:{
        save(state:any,action:any){
            return {...state,...action.payload}

        }
    }
}

export default model;