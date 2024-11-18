import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Client } from "../contentful/Client";

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await Client.getEntries({ content_type: "recipes" });
      
        setBlog(entries.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, loading);

  if (loading) return <p>Loading...</p>;

  if (blog.length === 0) return <p>No recipes found!</p>; 

  return (
    <div className="main-b">
      <h1 className="main-h1">So, What We Are Making Today?</h1>
      <div className="card-body">
        {blog.map((item, index) => {
         console.log(item.fields.coverImage.fields.file.url)
          return (
            <div className="card" key={index}>
            <img src={item.fields.coverImage.fields.file.url}/>
            <h2>{item.fields.recipeName}</h2>
            <p>{item.fields.displayTitle}</p>
            <Link to={'/1'}><button>Read more</button></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
