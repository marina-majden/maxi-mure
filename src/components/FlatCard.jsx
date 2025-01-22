import "./flatcard.css";

const FlatCard = () => {
    return (
        <div className='flatcards'>
            <div className='card'>
                <input checked='checked' id='rad1' name='rad' type='radio' />
                <div htmlFor='rad1'>
                    <h1>1</h1>
                    <div className='btn'></div>
                </div>
                <input id='rad2' name='rad' type='radio' />
                <div htmlFor='rad2'>
                    <h1>2</h1>
                    <div className='btn'></div>
                </div>
                <input id='rad3' name='rad' type='radio' />
                <div htmlFor='rad3'>
                    <h1>3</h1>
                    <div className='btn'></div>
                </div>
                <input type='checkbox' />
                <a>Read htmlFore</a>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. In hac
                    habitasse platea dictumst. Praesent metus tellus, elementum
                    eu, semper a, adipiscing nec, purus. Maecenas tempus, tellus
                    eget condimentum rhoncus, sem quam semper libero, sit amet
                    adipiscing sem neque sed ipsum. Donec pede justo, fringilla
                    vel, aliquet nec, vulputate eget, arcu.
                </p>
                <div className='shapes'></div>
                <div className='photo'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='blob'>
                    <div className='glob'></div>
                </div>
            </div>
            <svg xmlns='http://www.w3htmlForg/2000/svg' version='1.1'>
                <defs>
                    <filter id='goo'>
                        <feGaussianBlur
                            in='SourceGraphic'
                            stdDeviation='12'
                            result='blur'
                        />
                        <feColorMatrix
                            in='blur'
                            mode='matrix'
                            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                            result='goo'
                        />
                        <feComposite
                            in='SourceGraphic'
                            in2='goo'
                            operator='atop'
                        />
                    </filter>
                </defs>
            </svg>
            <svg className='svg' viewBox='0 0 400 400'>
                <defs>
                    <filter id='duotone-filter-post-one'>
                        <feColorMatrix
                            type='matrix'
                            values='0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0'></feColorMatrix>
                    </filter>
                </defs>
            </svg>
            <svg className='svg' viewBox='0 0 400 400'>
                <defs>
                    <filter id='duotone-filter-post-one'>
                        <feCohtmlForMatrix
                            type='matrix'
                            values='0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0'></feCohtmlForMatrix>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default FlatCard;
