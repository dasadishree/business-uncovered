import Image from 'next/image'
import Link from 'next/link'

const posts = [
    {img: '/chronicles/1.png', href: "https://www.instagram.com/p/DTOr4leD1eS/?img_index=1"},
    {img: '/chronicles/2.png', href: "https://www.instagram.com/p/DTs_Rg2DzZM/?img_index=1"},
    {img: "/chronicles/3.png", href: "https://www.instagram.com/p/DTGHy9DADYE/?img_index=1"},
    {img: "/chronicles/4.png", href: "https://www.instagram.com/p/DTECzOFD7Vg/?img_index=1"},
    {img: "/chronicles/5.png", href: "https://www.instagram.com/p/DRVi8kOjeLn/?img_index=1"},
    {img: "/chronicles/6.png", href: "https://www.instagram.com/p/DQztv6nj-Bp/?img_index=1"},
    {img: "/chronicles/7.png", href: "https://www.instagram.com/p/DL_TDVBoHuf/?img_index=1"},
    {img: "/chronicles/8.png", href: "https://www.instagram.com/p/DLEJJ7fA0S7/?img_index=1"}
]

export default function Chronicles() {
    return(
        <section className="chronicles" id="chronicles">
            {/* decor thjingoes */}
            <Image src="/textdecor.png" alt="" width={100} height={80} className="chron-deco chron-deco-t1"/>
            <Image src="/textdecor.png" alt="" width={100} height={80} className="chron-deco chron-deco-tr"/>
            <Image src="/textdecor.png" alt="" width={100} height={80} className="chron-deco chron-deco-b1"/>
            <Image src="/textdecor.png" alt="" width={100} height={80} className="chron-deco chron-deco-br"/>
        
            <div className="chronicles-inner">
                <span className="chronicles-label">business chronicles</span>
                <div className="chronicles-grid">
                    {posts.map((post, i)=> (
                        <Link href={post.href} key={i} className="chronicles-card" target="_blank" rel="noopener noreferrer">
                            <div className="chronicles-card-img">
                                <Image
                                    src={post.img}
                                    alt={`Chronicle ${i+1}`}
                                    fill
                                    style={{objectFit: "cover"}}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}