import React, { Component, useEffect,useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Pie(){
    
    const {transactions} = useContext(GlobalContext);
    const [data,setdata]=useState([])
    useEffect(()=>{
        const amounts = transactions.map(transaction => transaction.amount);
        const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
          ).toFixed(2);
      
        const balance=income-expense
  
        let dataset=[]
        if(balance==0 ){
        dataset.push({y:100,label:'Balance'})
        }
        else{
            dataset.push({y:Math.ceil((balance/income)*100),label:'Balance'})
        }
    let res=transactions.filter((tr)=>{
         return tr.amount<0
       })
   
      res.map((re)=>{

         let y=Math.ceil((re.amount/income)*100);
     
         dataset.push({y:Math.abs(y),label:re.Category})
      })
    
      if(dataset.length==0? dataset.push({y:100,label:'Balance'}):{})
    
      setdata(dataset)
    },[transactions])
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        innerHeight:300,
        outerHeight:300,
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: data,
            
            
        }]
    }
    return(
  
	 
			<CanvasJSChart options = {options}
				
			 />
		
		);
    
} 