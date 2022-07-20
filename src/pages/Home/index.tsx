
import { PageContainer } from '@ant-design/pro-components';
import { useDispatch } from '@umijs/max';
import { connect } from '@umijs/max';
import { Table } from 'antd';
//import { useModel } from '@umijs/max';
import { useEffect, useRef } from 'react';
import ProductDetailModal, { ProductShowRef } from './components/details';
import styles from './index.less';

const HomePage: React.FC<any> = (props) => {

  const {productData} = props;

  const {pageNum,pageSize,total,list:productLst} = productData;

  const dispatch = useDispatch();
  const productModelRef = useRef<ProductShowRef>(null);

  useEffect(()=>{
    if(dispatch){
      dispatch({
        type:'product_info/getProductLst'
      })
    }
  },[]);

  const  showDetailHandle = (record)=>{
    if(productModelRef&&productModelRef.current){
      productModelRef.current.onShow(record);
    }
}

  const columns = [
    {
    title:'产品Key',
    dataIndex:'productKey',
    key:'productKey'
  },
  {
    title:'名称',
    dataIndex:'name',
    key:'name'
  },
  {
    title:'节点类型',
    dataIndex:'nodeTypeLabel',
    key:'nodeTypeLabel'
  },
  {
    title:'连接类型',
    dataIndex:'connTypeLabel',
    key:'connTypeLabel'
  },
  {
    title:'状态',
    dataIndex:'status',
    key:'status',
    render:(text:string)=>{
      const statusText = text ==='0'?"离线":"在线";
      return <span>{statusText}</span>
    }
  },
  {
    title:'备注',
    dataIndex:'remark',
    key:'remark'
  },
  {
    title:'操作',
    key:'action',
    render:(record)=>{
      return <a onClick={()=>{showDetailHandle(record)}}>详情</a>
    }
  }
]



const pageChangeHandle = (pagination:any)=>{
  const {current,pageSize} = pagination;
  if(dispatch){
    dispatch({
      type:'product_info/getProductLst',
      payload:{
        pageNum:current,
        pageSize
      }
    })
  }
}

  //const { name } = useModel('global');
  
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Table columns={columns} dataSource={productLst} pagination={{total,current:pageNum,pageSize}} onChange={pageChangeHandle}></Table>
      </div>
      <ProductDetailModal ref={productModelRef}></ProductDetailModal>
    </PageContainer>
  );
};

export default connect(({product_info}:any)=>({
  productData:product_info.productList,
}))(HomePage);
