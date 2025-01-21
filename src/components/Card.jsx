import "./card.css";
const Card = () => {
    return (
        <div id='cards'>
            <div id='movie-card-list'>
                <div className='movie-card' data-movie='Blade Runner'>
                    <div className='movie-card__overlay'></div>
                    <div className='movie-card__share'>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe87d</i>
                        </button>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe253</i>
                        </button>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe80d</i>
                        </button>
                    </div>
                    <div className='movie-card__content'>
                        <div className='movie-card__header'>
                            <h1 className='movie-card__title'>Blade Runner</h1>
                            <h4 className='movie-card__info'>
                                (1982) Sci-Fi, Thriller
                            </h4>
                        </div>
                        <p className='movie-card__desc'>
                            A blade runner must pursue and try to terminate four
                            replicants who stole a ship in space and have
                            returned to Earth to find their creator.
                        </p>
                        <button
                            className='btn btn-outline movie-card__button'
                            type='button'>
                            Watch Trailer
                        </button>
                    </div>
                </div>
                <div className='movie-card' data-movie='Back to the Future'>
                    <div className='movie-card__overlay'></div>
                    <div className='movie-card__share'>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe87d</i>
                        </button>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe253</i>
                        </button>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe80d</i>
                        </button>
                    </div>
                    <div className='movie-card__content'>
                        <div className='movie-card__header'>
                            <h1 className='movie-card__title'>
                                Back to the Future
                            </h1>
                            <h4 className='movie-card__info'>
                                (1985) Adventure, Comedy, Sci-Fi
                            </h4>
                        </div>
                        <p className='movie-card__desc'>
                            Marty McFly, a 17-year-old high school student, is
                            accidentally sent 30 years into the past in a
                            time-traveling DeLorean invented by his close
                            friend, the maverick scientist Doc Brown.
                        </p>
                        <button
                            className='btn btn-outline movie-card__button'
                            type='button'>
                            Watch Trailer
                        </button>
                    </div>
                </div>
                <div className='movie-card' data-movie='Akira'>
                    <div className='movie-card__overlay'></div>
                    <div className='movie-card__share'>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe87d</i>
                        </button>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe253</i>
                        </button>
                        <button className='movie-card__icon'>
                            <i className='material-icons'>&#xe80d</i>
                        </button>
                    </div>
                    <div className='movie-card__content'>
                        <div className='movie-card__header'>
                            <h1 className='movie-card__title'>Akira</h1>
                            <h4 className='movie-card__info'>
                                (1988) Animation, Action, Drama
                            </h4>
                        </div>
                        <p className='movie-card__desc'>
                            A secret military project endangers Neo-Tokyo when
                            it turns a biker gang member into a rampaging
                            psychic psychopath that only two teenagers and a
                            group of psychics can stop.
                        </p>
                        <button
                            className='btn btn-outline movie-card__button'
                            type='button'>
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
