import "./minigard.css";

const MiniCard = () => {
    return (
        <>
            <figure className='snip1336'>
                <img
                    src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
                    alt='sample87'
                />
                <figcaption>
                    <img
                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
                        alt='profile-sample4'
                        className='profile'
                    />
                    <h2>
                        Hans Down<span>Engineer</span>
                    </h2>
                    <p>
                        I&apos;m looking for something that can deliver a
                        50-pound payload of snow on a small feminine target. Can
                        you suggest something? Hello...?{" "}
                    </p>
                    <a href='#' className='follow'>
                        Follow
                    </a>
                    <a href='#' className='info'>
                        More Info
                    </a>
                </figcaption>
            </figure>
            <figure className='snip1336 hover'>
                <img
                    src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg'
                    alt='sample74'
                />
                <figcaption>
                    <img
                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg'
                        alt='profile-sample2'
                        className='profile'
                    />
                    <h2>
                        Wisteria Widget<span>Photographer</span>
                    </h2>
                    <p>
                        Calvin: I&apos;m a genius, but I&apos;m a misunderstood
                        genius. Hobbes: What&lsquo;s misunderstood about you?
                        Calvin: Nobody thinks I&apos;m a genius.
                    </p>
                    <a href='#' className='follow'>
                        Follow
                    </a>
                    <a href='#' className='info'>
                        More Info
                    </a>
                </figcaption>
            </figure>
            <figure className='snip1336'>
                <img
                    src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg'
                    alt='sample69'
                />
                <figcaption>
                    <img
                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg'
                        alt='profile-sample5'
                        className='profile'
                    />
                    <h2>
                        Desmond Eagle<span>Accountant</span>
                    </h2>
                    <p>
                        If you want to stay dad you&apos;ve got to polish your
                        image. I think the image we need to create for you is
                        &quot;repentant but learning&quot;.
                    </p>
                    <a href='#' className='follow'>
                        Follow
                    </a>
                    <a href='#' className='info'>
                        More Info
                    </a>
                </figcaption>
            </figure>
        </>
    );
};

export default MiniCard;
