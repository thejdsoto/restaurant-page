import TestimonialImage from './assets/IMG_20241023_104942.jpg';
import Restaurant1 from './assets/res-1.jpg';
import Restaurant2 from './assets/res-2.jpg';
import Restaurant3 from './assets/res-3.jpg';

const homepage = `        
    <div class="hero">
        <h1 class>Discover Culinary Delights</h1>
        <p>Explore the best dining spots and cuisines around you.</p>
        <button>Explore Restaurants</button>
    </div>
    <div class="featured-restaurants">
    <h2 class>Featured Restaurants</h2>
        <div class="container">
            <div class="card">
                <div class="text">
                    <h3>Restaurant 1</h3>
                    <div class="text-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae enim fugit sit amet, eaque laborum repellendus dolore perferendis nostrum nemo dolores voluptatum corporis porro. Sint ratione voluptas reprehenderit iure?</p>
                        <button>View Details</button>
                    </div>
                </div>
                <div class="image">
                    <img src=${Restaurant1} />
                </div>
            </div>
            <div class="card">
                <div class="text">
                    <h3>Restaurant 2</h3>
                    <div class="text-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae enim fugit sit amet, eaque laborum repellendus dolore perferendis nostrum nemo dolores voluptatum corporis porro. Sint ratione voluptas reprehenderit iure?</p>
                        <button>View Details</button>
                    </div>
                </div>
                <div class="image">
                    <img src=${Restaurant2} />
                </div>
            </div>
            <div class="card">
                <div class="text">
                    <h3>Restaurant 3</h3>
                    <div class="text-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae enim fugit sit amet, eaque laborum repellendus dolore perferendis nostrum nemo dolores voluptatum corporis porro. Sint ratione voluptas reprehenderit iure?</p>
                        <button>View Details</button>
                    </div>
                </div>
                <div class="image">
                    <img src=${Restaurant3} />
                </div>
            </div>
        </div>
    </div>
    <div class="testimonials">
        <h2>Testimonials</h2>
        <div class="testimonial-container">
            <div class="image-container">
                <img src=${TestimonialImage} />
            </div>
            <div class="container">
                <div class="comment-main">
                    <p class="rating">★★★★★</p>
                    <p>DineFinder made it so easy to discover new local restaurants. The recommendations were spot on!</p>
                </div>
                <div class="comment-author">
                    <p class="poppins"><strong>Versaies Antoinette Soto aka Vivi</strong><p>
                    <p>Food Blogger</p>
                </div>
            </div>
        </div>
    </div>
`;

export { homepage };




