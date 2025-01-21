const Boxes = () => {
    var $cont = document.querySelector(".cont");
    var $elsArr = [].slice.call(document.querySelectorAll(".el"));
    var $closeBtnsArr = [].slice.call(
        document.querySelectorAll(".el__close-btn")
    );

    setTimeout(function () {
        $cont.classList.remove("s--inactive");
    }, 200);

    $elsArr.forEach(function ($el) {
        $el.addEventListener("click", function () {
            if (this.classList.contains("s--active")) return;
            $cont.classList.add("s--el-active");
            this.classList.add("s--active");
        });
    });

    $closeBtnsArr.forEach(function ($btn) {
        $btn.addEventListener("click", function (e) {
            e.stopPropagation();
            $cont.classList.remove("s--el-active");
            document
                .querySelector(".el.s--active")
                .classList.remove("s--active");
        });
    });

    return (
        <div>
            <div className='cont s--inactive'>
                <div className='cont__inner'>
                    <div className='el'>
                        <div className='el__overflow'>
                            <div className='el__inner'>
                                <div className='el__bg'></div>
                                <div className='el__preview-cont'>
                                    <h2 className='el__heading'>Section 1</h2>
                                </div>
                                <div className='el__content'>
                                    <div className='el__text'>Whatever</div>
                                    <div className='el__close-btn'></div>
                                </div>
                            </div>
                        </div>
                        <div className='el__index'>
                            <div className='el__index-back'>1</div>
                            <div className='el__index-front'>
                                <div
                                    className='el__index-overlay'
                                    data-index='1'>
                                    1
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='el'>
                        <div className='el__overflow'>
                            <div className='el__inner'>
                                <div className='el__bg'></div>
                                <div className='el__preview-cont'>
                                    <h2 className='el__heading'>Section 2</h2>
                                </div>
                                <div className='el__content'>
                                    <div className='el__text'>Whatever</div>
                                    <div className='el__close-btn'></div>
                                </div>
                            </div>
                        </div>
                        <div className='el__index'>
                            <div className='el__index-back'>2</div>
                            <div className='el__index-front'>
                                <div
                                    className='el__index-overlay'
                                    data-index='2'>
                                    2
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='el'>
                        <div className='el__overflow'>
                            <div className='el__inner'>
                                <div className='el__bg'></div>
                                <div className='el__preview-cont'>
                                    <h2 className='el__heading'>Section 3</h2>
                                </div>
                                <div className='el__content'>
                                    <div className='el__text'>Whatever</div>
                                    <div className='el__close-btn'></div>
                                </div>
                            </div>
                        </div>
                        <div className='el__index'>
                            <div className='el__index-back'>3</div>
                            <div className='el__index-front'>
                                <div
                                    className='el__index-overlay'
                                    data-index='3'>
                                    3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='el'>
                        <div className='el__overflow'>
                            <div className='el__inner'>
                                <div className='el__bg'></div>
                                <div className='el__preview-cont'>
                                    <h2 className='el__heading'>Section 4</h2>
                                </div>
                                <div className='el__content'>
                                    <div className='el__text'>Whatever</div>
                                    <div className='el__close-btn'></div>
                                </div>
                            </div>
                        </div>
                        <div className='el__index'>
                            <div className='el__index-back'>4</div>
                            <div className='el__index-front'>
                                <div
                                    className='el__index-overlay'
                                    data-index='4'>
                                    4
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='el'>
                        <div className='el__overflow'>
                            <div className='el__inner'>
                                <div className='el__bg'></div>
                                <div className='el__preview-cont'>
                                    <h2 className='el__heading'>Section 5</h2>
                                </div>
                                <div className='el__content'>
                                    <div className='el__text'>Whatever</div>
                                    <div className='el__close-btn'></div>
                                </div>
                            </div>
                        </div>
                        <div className='el__index'>
                            <div className='el__index-back'>5</div>
                            <div className='el__index-front'>
                                <div
                                    className='el__index-overlay'
                                    data-index='5'>
                                    5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a
                href='https://dribbble.com/shots/2802024-Satellite-Website-Prototype'
                target='_blank'
                className='icon-link'>
                <img src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png' />
            </a>
            <a
                href='https://twitter.com/NikolayTalanov'
                target='_blank'
                className='icon-link icon-link--twitter'>
                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png' />
            </a>
        </div>
    );
};

export default Boxes;
