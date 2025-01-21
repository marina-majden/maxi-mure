const About = () => {
    return (
        <>
            <div id='about'>
                <h2 className='text-brand-100 text-6xl text-center font-heading font-semibold px-8 mx-4 py-4 my-2'>
                    About
                </h2>
            </div>
            <div>
                <div className='text'>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Debitis fugiat, unde minus vitae, error ducimus
                        dolores in maiores similique incidunt, tempora quidem
                        sit optio adipisci atque velit perspiciatis nesciunt
                        quos.
                    </p>
                    <div className='photo'>
                        <img
                            src='https://picsum.photos/id/684/600/400'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
