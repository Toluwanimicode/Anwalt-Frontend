import Carousel from 'react-bootstrap/Carousel';


function Caorousel1() {
    return (
        <Carousel>
        <Carousel.Item>
            <img src="./images/slide-1.jpg" text="First slide" />
            <Carousel.Caption>
            <div>
                <div>
                    <img />
                </div>
                <div>
                    <h2>Inspired by Rights</h2>
                    <p>We strongly believe </p>
                </div>
                <div></div>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./images/slide-2.jpg" text="Second slide" />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="./images/slide-3.jpg" text="Third slide" />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
);
}

export default Caorousel1;