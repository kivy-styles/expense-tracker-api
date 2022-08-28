import React,{useEffect, useState}  from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom'
import {Expenses} from './expense.jsx'

const contentNode=document.getElementById('container')
function Home(){
    const [defaulttheme, setDefaulttheme]=useState('page')
    const [defaulttheme2, setDefaulttheme2]=useState('details')
    const [currenttheme, setcurrenttheme]=useState(false)
    const navigate=useNavigate()
    return(
        <div className={`${defaulttheme}`}>
            <div style={{position:'fixed', top:'50%', left:'92%',backgroundColor:'#B69D5B',
                fontFamily:'averiaSerifLibre',width:'8%',textAlign:'center', fontSize:20,
                borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%', paddingLeft:10,
                cursor:'pointer'}} onClick={()=>{
                    const theme=!currenttheme
                setcurrenttheme(theme)
                if (currenttheme===false){
                    setDefaulttheme('page-alternate-theme')
                setDefaulttheme2('details-alternate')}
                else{setDefaulttheme('page')
                    setDefaulttheme2('details')}}}>Change default theme </div>
           <div className={'content'}>
               <div className={'profile-pic-container'}><img className={'profile-pic'}
                                                             src={'./images/Gabriel.jpg'}></img></div>
               <div className={`${defaulttheme2}`}>
                   <div className={'field'}>JOSEPH AKINSOLA</div>
                   <div><h2 style={{marginTop:30}}>FULL STACK DEVELOPER</h2></div>
                   <div>
                       <h3 style={{marginTop:30}}>Job Description</h3>
                       <p style={{fontSize:18}}>
                           Development of dynamic, interactive and user-friendly modern web-apps
                       </p>
                   </div>
                   <div>
                       <h3 style={{marginTop:30}}>Location</h3>
                       <p style={{fontSize:18}}>
                           London, United Kingdom
                       </p>
                   </div>
                   <div>
                       <h3 style={{marginTop:30}}>Department</h3>
                       <p style={{fontSize:18}}>
                           Engineering || Information Technology
                       </p>
                   </div>
               </div>
           </div>
            <div style={{textAlign:'center', margin:'50px 0px'}}>
                <button className={'animate__animated animate__infinite animate__pulse'}
                        onClick={()=>navigate('./expenses')}
                        style={{backgroundColor:'#B69D5B', fontFamily:'averiaSerifLibre', fontSize:20,
                            borderRadius:5, borderColor:'#A08A50'}}>
                    View Employee's Expense Page &rarr;
                </button>
            </div>
        </div>
    )
}
function RoutedApp(){
    return(
    <Router>
        <Routes>
             <Route path='/' element={<Home/>}/>
            <Route path='/expenses' element={<Expenses/>}/>
        </Routes>
    </Router>
    )
}

ReactDom.render(<RoutedApp/>, contentNode)

if (module.hot){
    module.accept
}