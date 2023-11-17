
class Project {
    id;
    image; 
    name;
    description;
    technologies; 
    code;
    site;
    constructor(id, image, name, description, technologies, code, site) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.code = code;
        this.technologies = technologies;
        this.site = site;
    }
};

Project.prototype.addMeHtml = function(elem) {
    let html = `
    <div id="list_${this.id}" class="box">
        <div id="list_image_${this.id}" class="img">
            <img src=${this.image.src} alt=${this.image.alt} width=${this.image.width}  height=${this.image.height}>
        </div>
        <div>
            <h4 id="list_name_${this.id}">${this.name}</h4>
            <div class="text">
                <p id="list_description_${this.id}">${this.description}</p>
                <p id="list_technolgies_${this.id}"><span><b>Technologies used in a development:</b></span>&nbsp;${this.technologies}</p>
                <p> <span id="list_code_${this.id}"><a href=${this.code}>View code</a></span> 
                or 
                <span id="list_site_${this.id}"><a href=${this.site}>live version of the project</a></span>
            </div>
        </div>
    </div>`;
    elem.insertAdjacentHTML('beforeend', html);
}

function Image (src, height, width, alt) {
    this.src = src;
    this.height = height;
    this.width = width;
    this.alt = alt;
}


let burger= new Image ("./img/burgerdim.png", "600" , "500","burgerdim" );
let pizza = new Image("./img/pizza.png", "600", "500", "pizza");
let weather = new Image ("./img/weather.jpg",  "600" , "500", "weather" );
let calculator = new Image("./img/calculator.jpg", "600", "500", "calulator");
let timer = new Image("./img/timer.png", "600", "500", "timer");
let barbershop = new Image("./img/DapperBully.png", "600", "500", "dapperbully");

export const projects = 
    new Map ([
        ['mobileInfo', [
            new Project("weather", 
                weather,
                "Weather App", 
                `This weather App allows to view current weather conditions according to user location.
                In addition, information about weather conditions provided by the application is
                synchronized with the video that appears in the background`,
                "HTML5, CSS3, Javascript", 
                "https://github.com/tsvetanat/weather.git", 
                "https://tsvetanat.github.io/weather/"
            ), 
            new Project("calculator",
                calculator,
                "Calculator App",
                "Calculator App provides simple mathematical functions in a realistic design.",
                "HTML5, CSS3, Javascript",
                "https://github.com/tsvetanat/calculator.git", 
                "https://tsvetanat.github.io/calculator/"
            ),
            new Project("timer", 
                timer,"Timer App", 
                `Very simple and easy to use - this is a practical timer to get the job done.
                Perfect for every timing situation including cooking, sports, games and work tasks.
                Tap Start. The timer will start.
                Tap Stop to record the final time.
                Tap Reset to clear the stopwatch.`,
                "HTML5, CSS3, Javascript",
                "https://github.com/tsvetanat/timer.git", 
                "https://tsvetanat.github.io/timer/"
            ),
            ]
        ],
        ['websiteInfo', [
          
            new Project("burgerdim",
                burger,
                "Burger Online Store",
                `It's a pet-project of the online fastfood store.
                It has a homepage with a carousel of products, a page with a product menu, on which you can filter and search for fast food,
                add and remove it from the basket. Furthermore, website contains a page for viewing and confirming an order. 
                Also, this site has a separate page for ordering and modal windows for user authentication. `,
                "React, React-bootstrap, React-redux, HTML5, CSS3, Javascript", 
                "https://github.com/tsvetanat/website", 
                "https://tsvetanat.github.io/website/"
            ), 
            new Project("pizza",
                pizza,
                "Pizza Constructor",
                `This pet-project of a website allows everyone to individually create a pizza to their taste.
                To do this, you only need to drag the ingredients you like onto the flatbread.
                According to the ingredients you choose, the price of the pizza changes.
                At the bottom of the page there is also a form for sending an order`, 
                "HTML5, CSS3, Javascript", 
                "https://github.com/tsvetanat/pizza.git", 
                "https://tsvetanat.github.io/pizza/"
            ),
            new Project("barbershop",
                barbershop,
                "Barber shop Landing Page",
                `Through this page customers can know about the barbers of the shop, their works and contact them.
                This landing page is easy to navigate, user friendly and visually appealing.
                It displays the most important information in priority format.`, 
                "HTML5, CSS3", 
                "https://github.com/tsvetanat/dapperbully.git", 
                "https://tsvetanat.github.io/dapperbully/"
            )
        ]]
])

