import Head from 'next/head'
import React, { useState } from 'react';
import axios from 'axios';
import Icon from '@mdi/react'
import { FaBeer } from "react-icons/fa";
 
import { BsHandbag,BsSave } from "react-icons/Bs";
AiOutlineSearch
import { AiOutlineSearch} from "react-icons/Ai";
import { mdiAccount } from '@mdi/js'
MdAccountCircle
import { MdAccountCircle } from "react-icons/Md";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css" />
export default function Home() {

  let items = ['all bags', 'Bag 1', 'Bag 2', 'Bag 3', 'Bag 4'];
 
  const [data, setData] = useState([]);

  axios.get('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json').then(response => {
  let pdata = []
  pdata = response.data.data.products;
  setData(pdata)
  console.log("pdata",data);
  console.log("data",data);
});

  return (

    <div className='homediv' >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main>
        <div id="nav">
          <div id="topnav">
            <div id="left">TANN TRIM</div>
            <div id="right"><AiOutlineSearch/> <MdAccountCircle /> <BsSave/> <BsHandbag/> <span class="mdi-star"></span></div>
          </div>
          <div id="bottomnav">
            <div id="bottomitem">bags</div>
            <div id="bottomitem">accessories</div>
            <div id="bottomitem">items</div>
            <div id="bottomitem">Gifting</div>
            <div id="bottomitem">Jwellery</div>

          </div>
        </div>
        <div id="menu">


          {items.map(function (name, index) {
            return (<div key={index} id="menuitem">
              <div id="imgclass">
              
              <img width="100px" height="100px" src='bag.png' />
              </div>
              <div id="menutext">{name}</div>
            </div>);
          })}


        </div>
        <div id="productdiv">
          <div id="topnavf">
            <div id="leftside">Bags • Bag Packs</div>
            <div id="leftside">{data.length} Products</div>
          </div>


          {data.map(function (p, index) {
            return (
            
            
            <div  id="product" key={index}  >
               <img id='pimgsave' src="data:image/png;base64,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" />
            <img id='pimg' src={p.image[0]}/>
            <div id="productname">{p.name}</div>
            <div id="topnavprice">
              <div id="left">
              ₹ {p.price}<del id='dis'> 8999</del><div id="discount">(50% Off)</div>
              </div>
              <div id="right">
              <img id='pimgcart' src="./cart.png" />
              
              
              </div>
            </div>
          </div>
            
            
            
            
            
            
            );
          })}

            
            

          


        
        
        
        
        
        
        
        
        
        
        
          
        </div>
      </main>



      <style jsx>{`
      #bottomitem {
        cursor: pointer;
      }
      #nav {
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: column;
        background-color: black;
        position: absolute;
        top: 0px;
        right: 0px;
        justify-content: center;
        align-items: center;
        color: white;

      }
      #menu {
        width: 100%;
        height: 150px;
        display: flex;
        flex-diraction: row;
        margin-top: 40px;
        justify-content: space-around;
       
      }
      #bag {
        font-size: 40px;
      }
      .imgclass {
        width: 100px;
        height: 100px;
        cursor: pointer;
       
      }
      #topnav {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        cfont-family: 'Comme';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.55em;
        
        color: #E5DFD9;

      
      
        justify-content: space-between;

      
      }
      #right {
        margin-right: 10px;
        margin-top: 5px;
      }
      #topnavprice {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
       
        
        color: #E5DFD9;
      
        justify-content: space-between;

      
      }
      #left {
        display: flex;
        flex-direction: row;
        margin-left: 10px;

      }
      #dis {
        font-size: 12px;
        margin-left: 10px;
        margin-top: 4px;
      }
      #discount {
        color: green;
        font-size: 12px;
        margin-left: 4px;
        margin-top: 4px;

      }
      #topnavf {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        color: white;
        justify-content: space-between;

      
      }
      #pimg {
        width: 100%;
        height: 423px;

      }
      #pimgcart{
        width: 20px;
        height: 20px;

      }
      #pimgsave{
        width: 25px;
        height: 25px;
        position: absolute;
        top: 0px;
        right: 2px;

      }
      #rignt {
        margin-right: 10px;
      }
      
      #leftside {
        font-family: "Encode Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
    
      }
      #productname {
        width: 100%;
        height: 56px;
        font-family: 'Encode Sans';
font-style: normal;
font-weight: 500;
font-size: 19.4988px;
line-height: 26px;
color: white;


letter-spacing: 0.05em;
      }
      #product {
        width: 288px;
        height: 545px;
        display:flex;;
        flex-direction: column;
      
        margin: 8px;
        position: relative;
        cursor: pointer;
      }
      #pricediv {
        widht: 100%;
        height: 40px;
        display:flex;
        flex-direction:row;
      }
      #bottomnav {
        width: 60%;
        min-width: 600px;
        height: 50%;
        display: flex;
        flex-direction:row;

       
        justify-content: space-between;
        font-family: 'Encode Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.1em;

      
      }
      #menuitem {
        width: 150px;
        height: 150px;
     
        display: flex;
        justify-content: center;
        align-items: center;
        coursor: pointer;
       
   
        flex-direction: column;
      
        margin: 8px;
       
      }
      #productdiv {
        width: 100%;
        height: fit-content;
        background-color: blacj;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      #menutext {
        font-size: 14px;
        color: white;
        width: 100%;
        height: 20px;
        text-align: center;
      }
        main {
        
          width: 100%;
          height: fit-content;
        
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: black
          
         
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 10px;
          background-color: black;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            max-width: 1920px;
            width: 100%;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
