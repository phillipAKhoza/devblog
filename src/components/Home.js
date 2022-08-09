import React from "react";

const Home = () => {
    const blogs = [ 
        { 
        ID:1,
        Author:"Ruby Hill",
        createdAt:"3/14/2010",
        Category:"Research",
        Topic:"Lorem Ipsum",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        { 
        ID:2,
        Author:"Chuck Nanton",
        Category:"Question",
        Topic:"Lorem Ipsum",
        createdAt:"12/25/0853",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        { 
        ID:3,
        Author:"Makenzie Jenkins",
        Topic:"Lorem Ipsum",
        Category:"Discusion",
        createdAt:"1/27/5347",
        Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }]
    return ( 
        <div className="home container">
            <div className="row">
                <div className="col-12 col-xl-8 col-lg-8 col-md-8">
                    <ul className="blogs-container">
                        {blogs.map((blog) =>(
                            <li key={blog.ID}  className="card">
                                <h3 className="topic">{blog.Topic}</h3>
                                <h3 className="authour">Written by {blog.Author}</h3>
                                <h4 className="category">{blog.Category}</h4>
                                <p className="created-at">{blog.createdAt}</p>
                                <p className="blog-message">{blog.Message}</p>
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
                <div className="col-12 col-xl-4 col-md-4">
                            Most Popular/ Categories/ Lastest Blogs
                </div>
            </div>
        </div>
     );
}
 
export default Home;