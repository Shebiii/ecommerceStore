import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
    name: 'product',
    initialState: {
        items: [{
            id: 1 , wish:true , price: 10, productQuantity: 21 , url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png", name:"shoaib",description:"bfouioafnjfp9eionf2i3pboj2fp2u9o;j3fbpi2fio;bw;od b2iw hdpi2 dpi2 wdh i"
        },
        {
            id: 2 , wish:false , price: 200, productQuantity: 10 , url: "https://www.bcf.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw20bfd25f/images/520209/BCF_520209_hi-res.jpg?sw=558&sh=558&sm=fit&q=90", name:"alis",description:"123123"
        },  {
            id: 3 , wish:true , price: 100, productQuantity: 0 , url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png", name:"shoaib",description:"bfouioafnjfp9eionf2i3pboj2fp2u9o;j3fbpi2fio;bw;od b2iw hdpi2 dpi2 wdh i"
        },
        {
            id: 4 , wish:false , price: 1200, productQuantity: 2 , url: "https://www.bcf.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw20bfd25f/images/520209/BCF_520209_hi-res.jpg?sw=558&sh=558&sm=fit&q=90", name:"alis",description:"123123"
        },  
        ]

    },
    reducers: {
        addProduct(state, action) {
          const newProduct = action.payload;
                state.items.push({
                    id: newProduct.id,
                    price: newProduct.price,
                    productQuantity: newProduct.productQuantity,
                    url: newProduct.url,
                    name: newProduct.name,
                    description:newProduct.description
                });
        },
        Wishlist(state,action) {
            const newProduct = action.payload
            console.log(newProduct.id)
            state.items[newProduct.id].wish = !state.items[newProduct.id].wish
            console.log(state.items[newProduct.id].wish)
        }
    }
})

export const productAction = productslice.actions;
export default productslice