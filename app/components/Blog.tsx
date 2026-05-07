'use client'
import {useState} from 'react'
import Image from 'next/image'

const posts = [
    {title: "BUSINESS OF THE MONTH", img: "blogs/1.png"},
    {title: "FISCAL SPONSORSHIPS", img: "blogs/2.png"},
    {title: "THE BUSINESS HOTLINE", img: "blogs/3.png"},
]

export default function Blog() {
    const [index, setIndex] = useState(0)
    const prev=() => setIndex(i=>(i===0?posts.length-2:i-1))
    const next=() => setIndex(i=>(i>=posts.length-2?0:i+1))
    const visible = [posts[index], posts[(index+1) % posts.length]]

    return(
        <section className="blog" id="blog">
            <div className="blog-bg"/>
            <div className="blog-header">
                <span className="blog-label">blog</span>
                <button className="blog-admin-btn">+ ADD BLOG</button>
            </div>

            <div className="blog-carousel-row">
                <div className="blog-cards">
                    {visible.map((post, i)=>(
                        <div className="blog-card" key={i}>
                            <div className="blog-card-img">
                                <Image
                                    src={`/${post.img}`}
                                    alt={post.title}
                                    fill
                                    style={{objectFit: 'cover'}}
                                />
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