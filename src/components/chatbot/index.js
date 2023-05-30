import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import "./index.css"

const Chatbot =  () => {

    const [chat, setChat] = useState([]);
    const [input, setInput] = useState({
        user_input: ""
    });
    const fetchData = async (userInput) => {      
        const configuration = new Configuration({
            organization: "org-HE64b63VFlL3RscL2hfzqOrm",
            apiKey: 'fAGRS',
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `${userInput}`}],
                    
        });
        const newChat = [...chat];
        newChat.push(response.data.choices[0].message.content)
        setChat(newChat);
    }
  
    console.log(chat)
    console.log(input)

    // useEffect( () => {
    //     fetchData()
        
    // },[])
    
    const handleChange = (event) => {

        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        
        fetchData(input.user_input)
        
        setInput({ user_input: "" });
    };

    console.log(input);
    return (
        <div>
            
                {chat.map((message) => {
                    return <p>{message}</p>

                })}
            
            <form onSubmit={handleSubmit}>

                <input
                type="text"
                placeholder="Type here..."
                name="user_input"
                value={input.user_input}
                onChange={handleChange}
                className="input"
                />
                <input type="submit" value="Submit" />
            </form>

        {/* <Form userinput={fetchData} /> */}
            


        </div>
    )
}

export default Chatbot