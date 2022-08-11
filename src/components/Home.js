import React, { useState } from "react";
import ReadMoreReact from 'read-more-react';

const Home = () => {
    const blogs = [ 
        { 
        ID:1,
        Author:"Ruby Hill",
        createdAt:"3/14/2010",
        Category:"Research",
        Topic:"Lorem Ipsum",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Likes:10
        },
        { 
        ID:2,
        Author:"Chuck Nanton",
        Category:"HTML5",
        Topic:"Lorem Ipsum",
        createdAt:"12/25/0853",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Likes:20
        },
        { 
            ID:3,
            Author:"Dzunisani Mongwe",
            Category:"JavaScript",
            Topic:"Lorem Ipsum",
            createdAt:"12/25/0853",
            Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            Likes:20
            },
        { 
        ID:4,
        Author:"Makenzie Jenkins",
        Topic:"Lorem Ipsum",
        Category:"React",
        createdAt:"1/27/5347",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Likes:20
        }];
        const [sortBy,setSortBy] = useState('topics');

        var handleSortBy = (sort)=>{
            setSortBy(sort);
        }

    return ( 
        <div className="home container">
            <div className="row">
                <div className="col-12 col-xl-8 col-lg-8 col-md-8">
                    <ul className="blogs-container">
                        {blogs.map((blog) =>(
                            <li key={blog.ID}  className="card">
                                <h3 className="topic">{blog.Topic}</h3>
                                <div className="header-section">
                                <h5 className="category">{blog.Category}</h5>
                                <h5 className="authour">   written by {blog.Author}</h5>
                                </div>
                                <p className="created-at">{blog.createdAt}</p>
                                {/* <p className="blog-message">{blog.Message}</p> */}
                                <ReadMoreReact text={blog.Message}
                                    min={400}
                                    ideal={600}
                                    max={900}
                                    readMoreText={<p className="read-more">Read More...</p>}
                                    />
                                <hr />
                                <div className="user-interaction">
                                <i class="fa fa-thumbs-o-up"> Like</i>
                                <i class="fa fa-comment-o"> Comment</i>
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className="col-12 col-xl-4 col-md-4 right-section">
                    <div className="right-side">
                        <div className="sorting-buttons">
                            <button onClick={()=>handleSortBy("topics")}>Topics</button>
                            <button onClick={()=>handleSortBy("popular")}>Most Popular</button>
                            {/* <button>Lastest Blogs</button> */}
                        </div>
                        <div className="sort-by">
                            <ul className="sorted-contsiner">
                                { sortBy === "topics" ? 
                                    (blogs.map((blog)=>(

                                    <li className="sorted-items">
                                        <h5 className="category">{blog.Category}</h5>    
                                    </li>
                                    )))
                                    :    
                                    (blogs.map((blog)=>(
                                    <li className="sorted-items">
                                        <h5 className="topic">{blog.Topic}</h5>
                                        <p className="authour">Written by {blog.Author}</p>
                                        <p className="category">{blog.Category}</p>
                                    </li>
                                    )))
                                }
                            </ul>
                        </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;