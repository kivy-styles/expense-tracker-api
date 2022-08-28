import React,{useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap'
import 'whatwg-fetch'

export function Expenses(){
    const[firstdate, setFirstDate]=useState('')
    const[seconddate, setSecondDate]=useState('')
    const[minimum, setMinimum]=useState('')
    const[maximum, setMaximum]=useState('')
    const[merchant, setMerchant]=useState('')
    const[expenses, setExpenses]=useState([])
    const[reimburse, setreimburse]=useState('')
    const [show, setShow]=useState(false)
    const [show2, setShow2]=useState(false)
    const [item, setItem]=useState({})
    useEffect(()=>{
        fetch('/api/expenses').then(response=>response.json()).then(data=>setExpenses(data._expenses))
    },[])
    useEffect(()=>{
        fetch('/api/expenses').then(response=>response.json()).then(data=>setreimburse(data.reimburse))
    },[])
    console.log(expenses)
    console.log(reimburse)
    function displaydata(){
       const expense= expenses.map((item)=>{
           return(
            <div className={'list-group-item'} key={item.id} style={{display:'flex'}} onClick={()=>{
                setShow2(true)
                setItem(item)
            }}>
                <div style={{width:'17%'}}>{item.Date}</div>
                <div style={{width:'17%'}}>{item.Merchant}</div>
                <div style={{width:'17%'}}>{item.Total}</div>
                <div style={{width:'17%'}}>{item.Status}</div>
                <div style={{width:'32%'}}>{item.Comment}</div>
            </div>)
       })
        return expense
    }
    function handlemode(){
        return <Modal show={show} onHide={()=>setShow(false)} size={'lg'} centered>
            <Modal.Header closeButton>
                <Modal.Title>Welcome To Expense App</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>This is a sample Progressive Web App.</div><br/>
                <p>Try adding it to your home screen and using it offline.</p><br/>
                <p>This demo is built using React.js and node.js.
                    You can find the source code and fork the project on GitHub.</p><br/>
            </Modal.Body>
            <Modal.Footer>
                <div><button className={'btn btn-primary'} onClick={(event)=>{event.preventDefault()
                    setShow(false)}}>Got it</button></div>
            </Modal.Footer>
        </Modal>
    }
    function handlemode2(obj){
        return <Modal key={obj.id} show={show2} onHide={()=>setShow2(false)} size={'lg'} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{display:'flex'}}>
                    <div style={{width:'50%'}}>
                        <div style={{marginTop:15}}>
                        <label className={'label label-default label-control'} htmlFor={'merchant'} style={{fontSize:14, fontWeight:'bold'}}>
                            Merchant
                        </label>
                        <div style={{textAlign:'center'}}>
                            <input style={{width:'95%',backgroundColor: '#DDE2E8'}} className={'form-control'} id={'merchant'}
                                   type={'text'} name={'merchant'} value={obj.Merchant}/>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div style={{marginTop:5}}>
                        <label className={'label label-default label-control'} htmlFor={'total2'} style={{fontSize:14, fontWeight:'bold'}}>
                            Total
                        </label>
                        <div style={{textAlign:'center'}}>
                            <input style={{width:'95%',backgroundColor: '#DDE2E8'}} className={'form-control'} id={'total2'}
                                   type={'text'} name={'total2'} value={obj.Total}/>
                        </div>
                    </div>
                    </div>
                        <br/>
                        <div>
                            <div style={{marginTop:5}}>
                                <label className={'label label-default label-control'} htmlFor={'date2'} style={{fontSize:14, fontWeight:'bold'}}>
                                    Date
                                </label>
                                <div style={{textAlign:'center'}}>
                                    <input style={{width:'95%',backgroundColor: '#DDE2E8'}} className={'form-control'} id={'date2'}
                                           type={'text'} name={'date2'} value={obj.Date}/>
                                </div>
                            </div>
                        </div>
                    <br/>
                        <div>
                            <div style={{marginTop:5}}>
                                <label className={'label label-default label-control'} htmlFor={'comment2'} style={{fontSize:14, fontWeight:'bold'}}>
                                    Comment
                                </label>
                                <div style={{textAlign:'center'}}>
                                    <input style={{width:'95%',backgroundColor: '#DDE2E8', height:80}} className={'form-control'} id={'comment2'}
                                           type={'text'} name={'comment2'} value={obj.Comment}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div style={{width:'50%'}}></div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div><button className={'btn btn-primary'} onClick={(event)=>{event.preventDefault()
                    setShow2(false)}}>Got it</button></div>
            </Modal.Footer>
        </Modal>
    }
    return(
        <div style={{height:'100%'}}>
            <div className={'fixed'}>+</div>
            <div className={'navigation-bar'}>
                <div className={'heading'}><h5><b style={{color:'#f5f9ff'}}>Expense Manager</b></h5></div>
                <div className={'info'}><span style={{color:'#66A8FF', cursor:'pointer'}} onClick={()=>setShow(true)}>INFO</span></div>
                <div className={'logout'}><span style={{color:'#66A8FF'}}>LOGOUT</span></div>
            </div>
            <div className={'body'}>
                <div className={'aside'}>
                    <div className={'aside-title'}>
                        <div className={'filter-expense'}>Filter Expenses</div>
                        <div className={'clear-filter'} style={{color:'#1676F3'}}>Clear Filters</div>
                    </div>
                    <div style={{textAlign:'center'}}><hr style={{width:'87%', marginLeft:20, marginTop:20}}/></div>
                    <form className={'form-container'}>
                        <div>
                            <label className={'label label-default label-control'} htmlFor={'from'} style={{fontSize:14}}>
                                From
                            </label>
                            <div style={{textAlign:'center'}}>
                                <input style={{width:'95%',backgroundColor: '#DDE2E8'}} className={'form-control'} id={'from'}
                                       type={'date'} name={'date'} value={firstdate} onInput={(event)=>{
                                           setFirstDate(event.target.value)
                                    let stringeddate=firstdate.toString()
                                    const filtereddate=expenses.filter((item)=>{
                                        return item.Date===stringeddate
                                    })
                                    setExpenses(filtereddate)
                                       }}/>
                            </div>
                        </div>
                        <div style={{marginTop:15}}>
                            <label className={'label label-default label-control'} htmlFor={'to'} style={{fontSize:14}}>
                                To
                            </label>
                            <div style={{textAlign:'center'}}>
                                <input style={{width:'95%',backgroundColor: '#DDE2E8'}} className={'form-control'} id={'to'}
                                       type={'date'} name={'date'} value={seconddate}/>
                            </div>
                        </div>
                        <div style={{marginTop:15, display:'flex'}}>
                            <div>
                                <label className={'label label-default label-control'} htmlFor={'min'} style={{fontSize:14}}>
                                Min
                                </label>
                                <div style={{textAlign:'center'}}>
                                    <input style={{width:120,backgroundColor: '#DDE2E8'}} className={'form-control'} id={'min'}
                                           type={'number'} name={'min'} value={minimum}/>
                                </div>
                            </div>
                            <span style={{marginTop:30, marginLeft:7, marginRight:7}}>-</span>
                            <div>
                                <label className={'label label-default label-control'} htmlFor={'max'} style={{fontSize:14}}>
                                    Max
                                </label>
                                <div style={{textAlign:'center'}}>
                                    <input style={{width:120,backgroundColor: '#DDE2E8'}} className={'form-control'} id={'max'}
                                           type={'number'} name={'max'} value={maximum}/>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:15}}>
                            <label className={'label label-default label-control'} htmlFor={'merchant'} style={{fontSize:14}}>
                                Merchant
                            </label>
                            <div style={{textAlign:'center'}}>
                                <input style={{width:'95%',backgroundColor: '#DDE2E8'}} className={'form-control'} id={'merchant'}
                                       type={'text'} name={'merchant'} value={merchant}/>
                            </div>
                        </div>
                        <div style={{marginTop:15}}>
                            <label className={'label label-default label-control'} htmlFor={'status'} style={{fontSize:14}}>
                                Status
                            </label>
                            <div style={{display:'flex'}}>
                                <div style={{width:'50%', display:'flex'}}><input style={{backgroundColor: '#DDE2E8', height:20,
                                    marginTop:10, width:'30%'}} id={'status'}
                                            type={'checkbox'} name={'status'}/><label htmlFor={'status'} style={{width:'70%',marginTop:10}}>New</label></div>
                                <div style={{width:'50%'}}><input style={{backgroundColor: '#DDE2E8', height:20,
                                    marginTop:10, width:'30%', paddingLeft:5}} id={'progress'}
                                            type={'checkbox'} name={'progress'}/><label htmlFor={'progress'} style={{width:'70%', marginTop:10}}>In Progress</label></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={'centered'}>
                    <div style={{display:'flex', alignItems:'center', height:40, paddingTop:10, fontWeight:'bold',
                        position:'sticky', top:0, zIndex:99, backgroundColor:'white', height:60}}>
                        <div style={{width:'17%', paddingLeft:15, position:'sticky', top:0, zIndex:100}}>Date</div>
                        <div style={{width:'17%'}}>Merchant</div>
                        <div style={{width:'17%'}}> Total</div>
                        <div style={{width:'17%'}}>Status</div>
                        <div style={{width:'32%'}}>Comment</div>
                    </div>
                        <div className={'list-group'} style={{marginTop:0, paddingTop:0}}>
                        {displaydata()}
                        </div>
                </div>
                <div className={'aside'} style={{boxShadow:'0 2px 7px #69748E'}}>
                    <div className={'aside-title'}>
                        <div className={'filter-expense'}>To be reimbursed</div>
                    </div>
                    <div style={{textAlign:'center'}}><hr style={{width:'87%', marginLeft:20, marginTop:20}}/></div>
                    <div style={{textAlign:'center', marginTop:50}}><h2>{reimburse}</h2></div>
                </div>
            </div>
            {handlemode()}
            {handlemode2(item)}
        </div>
    )
}

