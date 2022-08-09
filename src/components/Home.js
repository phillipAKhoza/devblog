import React from "react";

const Home = () => {
    const blogs = [ 
        { 
        ID:1,
        Author:"Ruby Hill",
        createdAt:"3/14/2010",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        { 
        ID:2,
        Author:"Chuck Nanton",
        createdAt:"12/25/0853",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        { 
        ID:3,
        Author:"Makenzie Jenkins",
        createdAt:"1/27/5347",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }]
    return ( 
        <div className="home">
            <ul className="blogs-container">
            {blogs.map((blog) =>(
                <li key={blog.ID}>
                    <h5>{blog.Author}</h5>
                    <p>{blog.createdAt}</p>
                    <p>{blog.Message}</p>
                </li>
            )
            )}
            </ul>
        </div>
     );
}
 
export default Home;