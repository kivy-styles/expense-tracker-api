const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const expenses= [
    {id:1, Date:'25/08/2022',	Merchant: 'Fast food', Total: '$55.38', Status: 'New', Comment:'Expense from my business trip.'},
    {id:2, Date:'25/08/2022',	Merchant: 'Ride sharing',	Total: '$106.31', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:3, Date:'25/08/2022',	Merchant: 'Restaurant',	Total: '$63.58', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:4, Date:'25/08/2022',	Merchant: 'Office supplies', Total: '$508.09', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:5, Date:'25/08/2022',	Merchant: 'Restaurant',	Total: '$30.99', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:6, Date:'25/08/2022',	Merchant: 'Shuttle',	Total: '$214.35', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:7, Date:'25/08/2022',	Merchant:'Electronics',	Total: '$94.59', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:8, Date:'25/08/2022',	Merchant:'Hotel',	Total: '$89.74', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:9, Date:'25/08/2022',	Merchant:'Breakfast',	Total: '$240.79', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:10, Date:'25/08/2022',	Merchant:'Airline',	Total: '$127.04', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:11, Date:'25/08/2022',	Merchant:'Office supplies',	Total: '$32.60', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:12, Date:'24/08/2022', Merchant:'Parking',	Total: '$15.99', Status: 'In Progress', Comment:'Expense from my business trip.'},
    {id:13, Date:'24/08/2022',	Merchant:'Office supplies',	Total: '$764.03', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:14, Date:'24/08/2022',	Merchant:'Office supplies',	Total: '$74.53', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:15, Date:'24/08/2022', Merchant:'Ride sharing',	Total: '$253.04', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:16, Date:'24/08/2022',	Merchant:'Electronics',	Total: '$32.12', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:17, Date:'24/08/2022',	Merchant:'Shuttle',	Total: '$18.04', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:18, Date:'24/08/2022',	Merchant:'Fast food',	Total: '$542.16', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:19, Date:'24/08/2022',	Merchant:'Parking',	Total: '$595.14', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:20, Date:'24/08/2022',	Merchant:'Hotel',	Total: '$249.47', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:21, Date:'24/08/2022',	Merchant:'Breakfast',	Total: '$404.34', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:22, Date:'24/08/2022',	Merchant:'Office supplies',	Total: '$167.00', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:23, Date:'24/08/2022',	Merchant:'Office supplies',	Total: '$549.54', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:24, Date:'24/08/2022',	Merchant:'Rental car',	Total: '$245.29', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:25, Date:'24/08/2022',	Merchant:'Ride sharing',	Total: '$255.75', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:26, Date:'24/08/2022',	Merchant:'Rental car',	Total: '$172.12', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:27, Date:'24/08/2022',	Merchant:'Office supplies',	Total: '$530.36', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:28, Date:'24/08/2022',	Merchant:'Restaurant',	Total: '$558.14', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:29, Date:'24/08/2022',	Merchant:'Fast food',	Total: '$34.43', Status:'Reimbursed', Comment:'Expense from my business trip.'},
    {id:30, Date:'24/08/2022',	Merchant:'Shuttle',	Total: '$29.34', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:31, Date:'24/08/2022',	Merchant:'Fast food',	Total: '$62.78', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:32, Date:'24/08/2022',	Merchant:'Parking',	Total: '$15.38', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:33, Date:'23/08/2022',	Merchant:'Office supplies',	Total: '$416.30', Status: 'In Progress', Comment:'Expense from my business trip.'},
    {id:34, Date:'23/08/2022',	Merchant:'Rental car',	Total: '$66.86', Status: 'In Progress', Comment:'Expense from my business trip.'},
    {id:35, Date:'23/08/2022',	Merchant:'Airline',	Total: '$17.33', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:36, Date:'23/08/2022',	Merchant:'Fast food',	Total: '$61.72', Status: 'Reimbursed', Comment:'Expense from my business trip'},
    {id:37, Date:'23/08/2022',	Merchant:'Shuttle',	Total: '$516.16', Status: 'Reimbursed', Comment:'Expense from my business trip'},
    {id:38, Date:'23/08/2022',	Merchant:'Parking',	Total: '$160.72', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:39, Date:'23/08/2022',	Merchant:'Office supplies',	Total: '$89.88', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:40, Date:'23/08/2022',	Merchant:'Fast food',	Total: '$15.11', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:41, Date:'23/08/2022', Merchant:'Rental car',	Total: '$94.45', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:42, Date:'23/08/2022',	Merchant:'Parking',	Total: '$188.08', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:43, Date:'23/08/2022',	Merchant:'Hotel',	Total: '$188.44', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:44, Date:'23/08/2022',	Merchant:'Office supplies',	Total: '$89.02', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:45, Date:'23/08/2022',	Merchant:'Shuttle',	Total: '$10.51', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:46, Date:'23/08/2022',	Merchant:'Taxi',	Total: '$41.70', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:47, Date:'23/08/2022',	Merchant:'Airline',	Total: '$22.32', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:48, Date:'23/08/2022',	Merchant:'Electronics',	Total: '$543.36', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:49, Date:'22/08/2022',	Merchant:'Rental car',	Total: '$346.16', Status: 'New', Comment:'Expense from my business trip.'},
    {id:50, Date:'22/08/2022',	Merchant:'Electronics',	Total: '$562.65', Status: 'New', Comment:'Expense from my business trip.'},
    {id:51, Date:'22/08/2022',	Merchant:'Airline',	Total: '$215.20', Status: 'In Progress', Comment:'Expense from my business trip.'},
    {id:52, Date:'22/08/2022',	Merchant:'Parking',	Total: '$181.13', Status: 'In Progress', Comment:'Expense from my business trip.'},
    {id:53, Date:'22/08/2022',	Merchant:'Breakfast',	Total: '$583.31', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:54, Date:'22/08/2022',	Merchant:'Restaurant',	Total: '$37.13', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:55, Date:'22/08/2022',	Merchant:'Rental car',	Total: '$118.31', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:56, Date:'22/08/2022',	Merchant:'Breakfast',	Total: '$329.49', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:57, Date:'22/08/2022',	Merchant:'Hotel',	Total: '$24.29', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:58, Date:'22/08/2022',	Merchant:'Office supplies',	Total: '$163.39', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:59, Date:'22/08/2022',	Merchant:'Fast food',	Total: '$198.50', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:60, Date:'22/08/2022',	Merchant:'Electronics',	Total: '$247.86', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:61, Date:'22/08/2022',	Merchant:'Office supplies',	Total: '$130.44', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:62, Date:'22/08/2022',	Merchant:'Breakfast',	Total: '$42.93', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:63, Date:'22/08/2022',	Merchant:'Shuttle',	Total: '$579.59', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:64, Date:'22/08/2022',	Merchant:'Parking',	Total: '$44.77', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:65, Date:'22/08/2022',	Merchant:'Parking',	Total: '$117.07', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:66, Date:'21/08/2022',	Merchant:'Hotel', Total: '$174.18', Status: 'New', Comment:'Expense from my business trip.'},
    {id:67, Date:'21/08/2022',	Merchant:'Ride sharing', Total: '$690.52', Status: 'New', Comment:'Expense from my business trip.'},
    {id:68, Date:'21/08/2022',	Merchant:'Breakfast',	Total: '$312.05', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:69, Date:'21/08/2022',	Merchant:'Ride sharing',	Total: '$182.14', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:70, Date:'21/08/2022',	Merchant:'Taxi',	Total: '$212.35', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:71, Date:'21/08/2022',	Merchant:'Rental car',	Total: '$13.59', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:72, Date:'21/08/2022',	Merchant:'Parking',	Total: '$299.29', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:73, Date:'21/08/2022',	Merchant:'Taxi',	Total: '$28.73', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:74, Date:'21/08/2022',	Merchant:'Restaurant',	Total: '$88.06', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:75, Date:'21/08/2022',	Merchant:'Taxi',	Total: '$51.23', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:76, Date:'21/08/2022',	Merchant:'Parking',	Total: '$397.95', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:77, Date:'22/08/2022',	Merchant:'Hotel',	Total: '$24.29', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:78, Date:'22/08/2022',	Merchant:'Office supplies',	Total: '$163.39', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:79, Date:'22/08/2022',	Merchant:'Fast food',	Total: '$198.50', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:80, Date:'22/08/2022',	Merchant:'Electronics',	Total: '$247.86', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:81, Date:'22/08/2022',	Merchant:'Office supplies',	Total: '$130.44', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:82, Date:'22/08/2022',	Merchant:'Breakfast',	Total: '$42.93', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:83, Date:'22/08/2022',	Merchant:'Shuttle',	Total: '$579.59', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:84, Date:'22/08/2022',	Merchant:'Parking',	Total: '$44.77', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:85, Date:'22/08/2022',	Merchant:'Parking',	Total: '$117.07', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:86, Date:'21/08/2022',	Merchant:'Hotel',	Total: '$174.18', Status: 'New', Comment:'Expense from my business trip.'},
    {id:87, Date:'21/08/2022',	Merchant:'Ride sharing', Total: '$690.52', Status: 'New', Comment:'Expense from my business trip.'},
    {id:88, Date:'21/08/2022',	Merchant:'Breakfast',	Total: '$312.05', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:89, Date:'21/08/2022',	Merchant:'Ride sharing', Total: '$182.14', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:90, Date:'21/08/2022',	Merchant:'Taxi', Total: '$212.35', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:91, Date:'21/08/2022',	Merchant:'Rental car',	Total: '$13.59', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:92, Date:'21/08/2022',	Merchant:'Parking',	Total: '$299.29', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:93, Date:'21/08/2022',	Merchant:'Taxi',	Total: '$28.73', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:94, Date:'21/08/2022',	Merchant:'Restaurant',	Total: '$88.06', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:95, Date:'21/08/2022',	Merchant:'Taxi', Total: '$51.23', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:96, Date:'21/08/2022',	Merchant:'Parking',	Total: '$397.95', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:97, Date:'21/08/2022',	Merchant:'Breakfast',	Total: '$359.08', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:98, Date:'21/08/2022',	Merchant:'Airline',	Total: '$34.12', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:99, Date:'20/08/2022',	Merchant:'Rental car',	Total: '$108.50', Status: 'New', Comment:'Expense from my business trip.'},
    {id:100, Date:'20/08/2022',	Merchant:'Restaurant',	Total: '$251.64', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:101, Date:'20/08/2022',	Merchant:'Shuttle',	Total: '$315.19', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:102, Date:'20/08/2022',	Merchant:'Parking',	Total: '$472.55', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:103, Date:'20/08/2022',	Merchant:'Office supplies',	Total: '$88.18', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:104, Date:'20/08/2022',	Merchant:'Electronics',	Total: '$749.78', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:105, Date:'20/08/2022',	Merchant:'Taxi', Total: '$710.31', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:106, Date:'20/08/2022',	Merchant:'Electronics', Total: '$105.84', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:107, Date:'19/08/2022',	Merchant:'Parking',	Total: '$262.18', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:108, Date:'19/08/2022',	Merchant:'Hotel',	Total: '$10.61', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:109, Date:'19/08/2022',	Merchant:'Taxi',	Total: '$332.15', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:110, Date:'19/08/2022',	Merchant:'Taxi',	Total: '$497.51', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:111, Date:'19/08/2022',	Merchant:'Ride sharing', Total: '$59.90', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:112, Date:'19/08/2022',	Merchant:'Taxi', Total: '$330.11', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:113, Date:'19/08/2022',	Merchant:'Parking', Total: '$405.91', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:114, Date:'19/08/2022',	Merchant:'Airline',	Total: '$94.54', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:115, Date:'19/08/2022',	Merchant:'Restaurant',	Total: '$103.82', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:116, Date:'19/08/2022',	Merchant:'Fast food',	Total: '$66.46', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:117, Date:'19/08/2022',	Merchant:'Rental car',	Total: '$175.48', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:118, Date:'18/08/2022',	Merchant:'Office supplies',	Total: '$350.63', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:119, Date:'18/08/2022',	Merchant:'Electronics',	Total: '$146.59', Status: 'Reimbursed', Comment:'Expense from my business trip.'},
    {id:120, Date:'18/08/2022',	Merchant:'Restaurant',	Total: '$97.79', Status: 'Reimbursed', Comment:'Expense from my business trip.'}
]
let bug
const sort=expenses.filter((item)=>{
    return item.Status==='New'
})
const total =sort.reduce((total, item)=>{
    let newitem=item.Total
    newitem= newitem.slice(1)
    newitem=parseFloat(newitem)
    bug=newitem
    return total+newitem
},0)

const app = express()

app.use(express.static('static'))

app.get('/api/expenses', (req,res)=>{
    let reimburse=`$${total}`
    const metadata=expenses.length
    const all={_expenses:expenses, _metadata:metadata, reimburse:reimburse}
    res.json(all)
})

app.listen(port,()=>{
    console.log('App started on Port 3000')
    console.dir(bug)
    console.dir(total)
    console.dir(sort)
})