import {ADD_TO_CART} from '../Constant'

export const addToCart = (data)=>{   // data should be the perimeter
    return{
       type:ADD_TO_CART,
        data
    }
}
// export const removeToCart = (data)=>{   // data should be the perimeter
//     return{
//        type:'REMOVE-TO-CART',
//         data
//     }
// }