import { FaBlog } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa6";
import { GrBlog } from "react-icons/gr";
import { SiMicrodotblog } from "react-icons/si";
import { useState } from 'react';
import '../styles/Blog.css';

function ExpandableText({ children }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div>
            <p>
                {isExpanded ? children : `${children.substring(0, 300)}....`}
                 <button onClick={toggleExpand}>
                {isExpanded ? 'See less' : 'See more'}
            </button>
            </p>
           
        </div>
    );
}

export default function Blog() {
    return (
        <div className="container">
            <h1>Blog</h1>

            <div className="blog">
                <div className="blog-image">
                    <div className="blog-icon"><FaBlog /></div>
                </div>
                <div className="blog-text">
                    <ExpandableText>
                        Tourism is one of the most exciting and enriching aspects of life. It not only opens new horizons but also allows people to learn about different cultures, traditions, and natural beauties. With each passing year, travel becomes more accessible and diverse, and the number of tourist destinations and services continues to grow.
                        Travel helps people broaden their horizons, learn new things, and develop skills that are useful in everyday life. Whether you are traveling alone or with friends and family, each trip is a unique experience that contributes to personal growth.
                    </ExpandableText>
                </div>
            </div>

            <div className="blog">
                <div className="blog-image">
                    <div className="blog-icon"><FaBloggerB /></div>
                </div>
                <div className="blog-text">
                    <ExpandableText>
                        Types of Tourism
                        Cultural Tourism: This is an opportunity to immerse oneself in the richness and diversity of the cultural heritage of different countries. Visiting museums, historical monuments, theaters, and galleries helps to better understand and appreciate the history and culture of other nations.
                        Adventure Tourism: Ideal for those seeking adrenaline and unforgettable experiences. Mountain hiking, rafting, safaris, and extreme sports allow you to feel like a true explorer and test your limits.
                        Eco-Tourism: Aimed at preserving nature and the environment. Eco-tourists choose routes that minimize negative impacts on nature and participate in volunteer projects for environmental conservation.
                        Medical Tourism: Involves traveling abroad to receive medical services. This can include treatment, prevention of various diseases, cosmetic procedures, and rehabilitation.
                    </ExpandableText>
                </div>
            </div>

            <div className="blog">
                <div className="blog-image">
                    <div className="blog-icon"><GrBlog /></div>
                </div>
                <div className="blog-text">
                    <ExpandableText>
                        Travel and Self-Improvement
                        Travel helps people broaden their horizons, learn new things, and develop skills that are useful in everyday life. Whether you are traveling alone or with friends and family, each trip is a unique experience that contributes to personal growth. Tourism is not just a way to spend a vacation; it is an opportunity to enrich your life, making it brighter and more interesting. Each journey is a step towards new discoveries and unforgettable experiences.
                    </ExpandableText>
                </div>
            </div>

            <div className="blog">
                <div className="blog-image">
                    <div className="blog-icon"><SiMicrodotblog /></div>
                </div>
                <div className="blog-text">
                    <ExpandableText>
                        Tips for Tourists
                        Plan Ahead: Research your chosen destination, learn about local traditions and customs, book accommodations and tickets in advance.
                        Be Open-Minded: Don't be afraid to try new things, interact with locals, and learn more about their way of life.
                        Protect Nature: Respect the environment, do not leave litter, and use eco-friendly means of transportation.
                        Follow Safety Rules: Always carry copies of your documents, keep an eye on your belongings, and be cautious in unfamiliar places.
                    </ExpandableText>
                </div>
            </div>
        </div>
    );
}