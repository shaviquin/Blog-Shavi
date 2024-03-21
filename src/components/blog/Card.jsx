import React from "react";
import "./Blog.css";
import { AiOutlineTags } from "react-icons/ai"; // Importar directamente desde react-icons/ai
import { blog } from "../../assets/data/data";

const Card = () =>{
    return (
        <>
        <section>
            <div className="blog">
                <div className="container grid3">
                    {blog.map((item) => (
                        <div className="box boxItems" key={item.id}>
                            <div className="img">
                                <img src={item.cover} alt="cover" />
                            </div>
                            <div className="details">
                                <div className="tag">
                                    <AiOutlineTags className="icon"/>
                                    <a href="/">#{item.category}</a>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export default Card;
