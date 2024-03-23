import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { blog } from "../../assets/data/data";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Details = () => {
    const {id} = useParams()
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id));

        if(blogs) {
            setBlogs(blogs)
        }
    },[])

    return (
        <>
        {blogs ? (
            
        <section className="singlePost">
            <div className="container">
                <div className="left">
                    <img src={blogs.cover} alt="" />
                </div>
                <div className="right">
                    <div className="buttons">
                        <button className="button">
                            <BsPencilSquare/>
                        </button>
                        <button className="button">
                            <AiOutlineDelete/>
                        </button>
                    </div>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.desc}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, qui incidunt ullam consequuntur odit molestias culpa porro ex, deleniti soluta dolor ducimus alias expedita explicabo debitis sed tenetur non cum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, qui incidunt ullam consequuntur odit molestias culpa porro ex, deleniti soluta dolor ducimus alias expedita explicabo debitis sed tenetur non cum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, qui incidunt ullam consequuntur odit molestias culpa porro ex, deleniti soluta dolor ducimus alias expedita explicabo debitis sed tenetur non cum?</p>

                </div>
            </div>
        </section>):null}
        </>
    )
}

export default Details