import React, { useState } from "react";
import Menu from "../../Componentes/Menu";
import "./styles.css";
//import { getUsers } from "../../services/api";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Row,
    Col
} from 'reactstrap';
import { useNavigate } from "react-router-dom/dist";

const items = [
    {
        src: 'https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150_960_720.jpg',
        altText: 'Slide 1',
        caption1: "Annual Service",
        caption2: "Make an annual check up on your vehicle with quality at Ger's Garage.",
        key: 1,
    },
    {
        src: 'https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186_960_720.jpg',
        altText: 'Slide 2',
        caption1: "Major Service",
        caption2: "We have the highest quality services on the market.",
        key: 2,
    },
    {
        src: 'https://cdn.pixabay.com/photo/2019/02/06/11/59/oil-3979023_960_720.jpg',
        altText: 'Slide 3',
        caption1: "Repair/Fault",
        caption2: "We do quick and quality repairs.",
        key: 3,
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/09/10/20/13/child-labor-934900_960_720.jpg',
        altText: 'Slide 4',
        caption1: "Major Repair",
        caption2: "At Ger's Garage we have highly qualified professionals to repair your vehicle.",
        key: 4,
    },
];

const HomePage = () => {

    //const [users, setUsers] = useState([]);
    //const [loading, setLoading] = useState(true);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const navigate = useNavigate();

    const handleVehicle = () => {
        navigate("/vehicle");
    };

    const handleBooking = () => {
        navigate("/booking");
    };

    const handleInvoice = () => {
        navigate("/invoice");
    };

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption2}
                    captionHeader={item.caption1}
                />
            </CarouselItem>
        );
    });

    /*useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data.result);
            setLoading(false);
        })();
    }, []);



    if (loading) {
        return <div className="loading">Loading...</div>;
    };*/

    return (
        <div className="main-home">
            <Menu />

            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}

            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}

                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>

            <h2 className="font">High quality repair services and accessories sales</h2>

            <Row className="row-home">
                <Col sm="4">
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://cdn.pixabay.com/photo/2016/10/04/02/26/engine-1713398__340.jpg"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Booking
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Booking service
                            </CardSubtitle>
                            <CardText>
                                Book an appointment with us by clicking the button below.
                            </CardText>
                            <Button onClick={handleBooking}>
                                Book
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4" >
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://cdn.pixabay.com/photo/2022/07/31/20/32/volkswagen-7356817__340.jpg"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Vehicle
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Create Vehicle
                            </CardSubtitle>
                            <CardText>
                                Register your vehicle by clicking the button below.
                            </CardText>
                            <Button onClick={handleVehicle}>
                                Create
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://cdn.pixabay.com/photo/2019/01/12/19/38/audit-3929140__340.jpg"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Invoice
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                See Invoice
                            </CardSubtitle>
                            <CardText>
                                See your latest invoice by clicking the button below.
                            </CardText>
                            <Button onClick={handleInvoice}>
                                View
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>

    );
};

export default HomePage