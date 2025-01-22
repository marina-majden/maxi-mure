import "./slider.css";
import $ from "jquery";

const Slider = () => {
    const slideElements = [".back__slide", ".card__slide", ".content__slide"];
    let inProgress = false;

    const goToSlide = (slideElements, index) => {
        if (!inProgress) {
            inProgress = true;

            $(".active").addClass("exit");
            $(".active").removeClass("active");
            slideElements.forEach((elem) => {
                $(`${elem}:nth-child(${index})`).addClass("active");
            });

            const evenSlide = index % 2 === 0;
            if (evenSlide) $(".content__ping").addClass("content__ping--right");
            else $(".content__ping").removeClass("content__ping--right");
            $(".content__ping--noanimation").removeClass(
                "content__ping--noanimation"
            );

            setTimeout(() => $(".exit").removeClass("exit"), 1000);
            setTimeout(() => (inProgress = false), 2000);
        }
    };

    $(".content__slide:nth-child(1) .button").on("click", () =>
        goToSlide(slideElements, 2)
    );
    $(".content__slide:nth-child(2) .button").on("click", () =>
        goToSlide(slideElements, 1)
    );

    setTimeout(() => goToSlide(slideElements, 2), 2000);
    setTimeout(() => goToSlide(slideElements, 1), 6000);

    let amount = 0;
    let slide = 0;

    const progress = () => {
        amount++;
        $(".active .progress").css("transform", `scaleX(${amount / 400})`);
        if (amount >= 400) {
            amount = 0;
            $(".active .progress").css("transform", `scaleX(${amount / 400})`);
            slide = (slide + 1) % 2;
            goToSlide(slideElements, slide + 1);
            clearInterval(progressInterval);
            setTimeout(() => {
                progressInterval = setInterval(progress, 20);
                $(".back__slide:not(.active) .progress").css(
                    "transform",
                    "scaleX(0)"
                );
            }, 2000);
        }
    };
    let progressInterval = setInterval(progress, 20);
    return (
        <div>
            <h3>Slider</h3>
            <div className='wrap'>
                <div className='back'>
                    <div className='back__slide active'>
                        <div className='progress'></div>
                    </div>
                    <div className='back__slide'>
                        <div className='progress'></div>
                        <div className='back-front-image'></div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__slide active'>
                        <div className='image'></div>
                        <span className='number'>01</span>
                        <span className='date'>
                            30 MARCH 2017{" "}
                            <span className='date__time'>12:37PM</span>
                        </span>
                    </div>
                    <div className='card__slide'>
                        <div className='back-image'></div>
                        <div className='image'></div>
                        <span className='number'>02</span>
                        <span className='date'>
                            30 MARCH 2017{" "}
                            <span className='date__time'>12:37PM</span>
                        </span>
                    </div>
                    <div className='content'>
                        <div className='content__slide active'>
                            <h2 className='title'>
                                {" "}
                                <span className='title__line'>
                                    {" "}
                                    <span className='title__inner'>
                                        Mesmerizing
                                    </span>
                                </span>
                                <span className='title__line'>
                                    {" "}
                                    <span className='title__inner'>Depths</span>
                                </span>
                            </h2>
                            <p className='desc'>
                                Nunc orci metus, ornare non molestie ac,
                                ultrices eget <br /> dolor. Mauris ac mattis
                                lectus. Praesent facilisis <br /> malesuada
                                sapien nec pharetra. Fusce eleifend, nisl.
                            </p>
                            <div className='button-wrap'>
                                <a className='button'>
                                    Learn More
                                    <span className='button__hover'></span>
                                </a>
                            </div>
                        </div>
                        <div className='content__slide'>
                            <h2 className='title'>
                                {" "}
                                <span className='title__line'>
                                    {" "}
                                    <span className='title__inner'>
                                        Breathtaking
                                    </span>
                                </span>
                                <span className='title__line'>
                                    {" "}
                                    <span className='title__inner'>
                                        Heights
                                    </span>
                                </span>
                            </h2>
                            <p className='desc'>
                                Nunc orci metus, ornare non molestie ac,
                                ultrices eget <br /> dolor. Mauris ac mattis
                                lectus. Praesent facilisis <br /> malesuada
                                sapien nec pharetra. Fusce eleifend, nisl.
                            </p>
                            <div className='button-wrap'>
                                <a className='button'>
                                    Learn More
                                    <span className='button__hover'></span>
                                </a>
                            </div>
                        </div>
                        <div className='content__ping content__ping--noanimation'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
