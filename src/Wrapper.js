import React, { useEffect } from 'react';
import styled from "styled-components"
import { ImTumblr, ImTwitter } from "react-icons/im";
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion'



const backColor = "#ffffff";
const buttonColor = "#f9f21b";

const Wrapperstyle = styled.div`
width: 550px;
background-color: ${backColor};
border-radius: 10px;
padding: 15px;
box-sizing: border-box;

.quote-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    &>p{
        transition-timing-function: ease-in;
        transition-duration: 2s;
        width: 80%;
        text-align: center;
        font-size: 40px;

    }
    &>div{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        p{
            font-size: 20px;
        }
    }
}
.interactions-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    div{
        width: 100px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        a{
            width: 40px;
            height: 40px;
            background-color: ${buttonColor};
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            *{
                width: 23px;
                height: 23px;
                color: black;
            }
        }

    }
    button{
        width: 175px;
        height: 35px;
        font-size: 18px;
        background-color: ${buttonColor};
        border: none;
        border-radius: 5px;
        font-weight: 600;
        &:hover{
            cursor: pointer;
        }
    }
}
`



export default function Wrapper(props) {
    const [quote, setQuote] = useState({text: "", author: ""});
    const [APIdata, setAPIdata] = useState([{}])

    useEffect(() => {axios.get("https://type.fit/api/quotes").then((r) => setAPIdata(r.data))}, []);
    useEffect(() => {updateQuote()}, [APIdata]);


    function  updateQuote(){
        setQuote(APIdata[Math.floor(APIdata.length * Math.random())]);
    }

    function tweeterIntentGenerator(str){
        const stringWebIntent = `https://twitter.com/intent/tweet?hashtags=quotes&text="${str.text}" -${(str.author === null? "Unknown" : str.author)}`;
        return stringWebIntent;

    }
    function tumblrIntentGenerator(str){
        if (str !== undefined){
            const stringWebIntent = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${(str.author === null? "Unknown" : str.author)}&content=${str.text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
            return stringWebIntent;
        }
    }

    return(
            <Wrapperstyle id="quote-box">
                <div className='quote-wrapper'>
                    <p id='text'>{'"' + quote.text + '"'}</p>
                    <div>
                        <p id='author'>-{quote.author === null? 'Unknown' : quote.author}</p>
                    </div>
                </div>
                <div className='interactions-wrapper'>
                    <div>
                    <a rel="noopener noreferrer" target="_blank" href={tweeterIntentGenerator(quote)} id="tweet-quote"><ImTwitter /></a>
                    <a rel="noopener noreferrer" target="_blank" href={tumblrIntentGenerator(quote)} id="tumblr-quote"><ImTumblr /></a>
                    </div>
                    <button onClick={updateQuote} id='new-quote'>New quote</button>
                </div>
            </Wrapperstyle>
    )
};
