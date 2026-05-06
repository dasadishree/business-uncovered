'use client'
import {useState} from 'react'

const posts = [
    {title: "TITLE #1", img: null},
    {title: "TITLE #2", img: null},
    {title: "TITLE #3", img: null},
]

export default function Blog() {
    const [index, setIndex] = useState(0)
    const prev=() => setIndex(i=>(i===0?posts.length-2:i-1))
    const next=() => setIndex(i=>(i>=posts.length-2?0:i+1))
    const visible = [posts[index], posts[(index+1) % posts.length]]

    return(
        <section className="blog" id="blog">
            <div className="blog-bg"/>
            <span className="blog-label">blog</span>
            <div className="blog-carousel-row">
                <div className="blog-left-deco">
                    <div className="blog-deco-placeholder"/>
                </div>

                <div className="blog-cards">
                    {visible.map((post, i)=>(
                        <div className="blog-card" key={i}>
                            <div className="blog-card-img">
                                <span className="blog-card-img-label">IMAGE</span>
                            </div>
                            <div className="blog-card-footer">
                                <h3 className="blog-card-title">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="blog-arrow blog-arrow-left" onClick={prev} aria-label="Previous">←</button>
                <button className="blog-arrow blog-arrow-right" onClick={next} aria-label="Next">→</button>
            </div>
        </section>
    )
}