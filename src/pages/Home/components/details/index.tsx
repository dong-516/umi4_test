import { ProductInfo } from "@/types/product";
import { Modal } from "antd";
import { forwardRef, RefAttributes, useImperativeHandle, useState } from "react";
import styles from './index.less'

export interface ProductShowRef{
        onShow:(params:ProductInfo)=>void
}

const ProductDetailModal:React.FC<RefAttributes<ProductShowRef>> = forwardRef<ProductShowRef>((props,ref)=>{
    
        const [visiible,setVisible] = useState(false);
        const [productInfo,setProductInfo] = useState<ProductInfo>({});
    
        useImperativeHandle(ref,()=>{
                return {
                        onShow:(props:ProductInfo)=>{
                                setProductInfo(props);
                                setVisible(true);  
                        }
                }
            })
    
        return (<Modal title={productInfo.name} visible={visiible} onCancel= {()=>setVisible(false)}>
                    <span className={styles['title-container']}>产品Key:{productInfo.productKey}</span>
                    <span className={styles['title-container']}>名称:{productInfo.name}</span>
                    <span className={styles['title-container']}>节点类型:{productInfo.nodeTypeLabel}</span>
                    <span className={styles['title-container']}>连接类型:{productInfo.connTypeLabel}</span>
                    <span className={styles['title-container']}>状态:{productInfo.status?"在线":"离线"}</span>
                    <span className={styles['title-container']}>备注:{productInfo.remark}</span>
            </Modal>)
    });
export default ProductDetailModal;