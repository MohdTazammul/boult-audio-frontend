import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import './style.css'
const Faq = ({que,ans}) => {
    const [index,setIndex]=useState([])
    return (
        <>
            <div>
                <h1>Y1 FAQs</h1>
                <hr />
                   {
                    que.map((el,i)=>(
                        <div key={i} className='faq-single-cont'>
                            <div className='faq-cont-que' onClick={()=>{
                                setIndex(pre=>{
                                    let res=pre.includes(i)
                                    if(res){
                                        pre=[...index]
                                        let x=pre.indexOf(i);
                                        let y=pre.splice(x,1);
                                        return pre.length==0?[]:[...pre]
                                    }
                                    return [...pre,i]
                                })
                            }}>
                            <span><h2>{que[i]}</h2></span>
                            <span className='faq-arrow'>{
                                !index.includes(i)?<Icon style={{fontSize:"32px"}} icon="ant-design:down-outlined" />:<Icon style={{fontSize:"32px"}}  icon="akar-icons:chevron-up" />
                                }</span>
                            </div>
                            <div style={{display:index.includes(i)?"block":"none",marginLeft:"20px"}}>
                                <h4>{ans[i]}</h4>
                            </div>
                        </div>
                    ))
                   }
            </div>
        </>
    );
};

export default Faq;