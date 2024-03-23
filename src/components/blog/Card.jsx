import React from "react";
import "./Blog.css";
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from "react-icons/ai"; // Importar directamente desde react-icons/ai
import { blog } from "../../assets/data/data"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                                <Link to ={`/details/${item.id}`} className="link">
                                    <h3>{item.title}</h3>
                                </Link>
                                {/* Slice acorta el párrafo */}
                                <p>{item.desc.slice(0, 180)}...</p>
                                <div className="date">
                                    {/* Ícono de reloj */}
                                    <AiOutlineClockCircle className="icon"/> <label htmlFor="">{item.date}</label>
                                    {/* Ícono de comentarios */}
                                    <AiOutlineComment className="icon"/> <label htmlFor="">27</label>
                                    {/* Ícono de compartir */}
                                    <AiOutlineShareAlt className="icon"/> <label htmlFor="">SHARE</label>

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
