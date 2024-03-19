import React from 'react';
import '../assets/style/style.css';
import todayImg from  '../images/todayImg.png';


function Today() {
    return (
        <div className="today">
            <div className="container">
                <div className="today-text">
                    <p className="today-p1">Menu that fits you palatte</p>
                    <br />
                    <span className='today-span'>
                        <svg width="40" height="9" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_559_1311)">
                                <path d="M33.5016 9C37.0849 9 40 6.98129 40 4.49995C40 2.01861 37.0849 0 33.5016 0C30.1122 0 27.3221 1.80637 27.03 4.1018H22.3529V3.1552L0 3.1552V5.84446L22.353 5.84446V4.89798H27.0301C27.3223 7.19352 30.1122 9 33.5016 9ZM21.4898 5.04839L0.863293 5.04839V3.95161L21.4898 3.95161V5.04839ZM27.8662 4.49995C27.8662 2.45778 30.3944 0.796403 33.5017 0.796403C36.6091 0.796403 39.1372 2.45778 39.1372 4.49995C39.1372 6.54222 36.6091 8.2037 33.5017 8.2037C30.3944 8.2037 27.8662 6.54222 27.8662 4.49995Z" fill="#DCCA87" />
                            </g>
                            <defs>
                                <clipPath id="clip0_559_1311">
                                    <rect width="40" height="9" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </span>
                    <h1 className="today-h1">Today’s Special</h1>
                </div>
                <div className="today-row">
                    <div className="today-left">
                        <div className="today-left-text">
                            <h1 className='today-left-h1'>Wine & Beer</h1>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Chapel Hill Shiraz
                              <br />
                             <p className='today-left-span2'>AU | Bottle</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$56</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Catena Malbec
                              <br />
                             <p className='today-left-span2'>AU | Bottle</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$59</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>La Vieille Rosé
                              <br />
                             <p className='today-left-span2'>FR | 750 ml</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$44</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Rhino Pale Ale
                              <br />
                             <p className='today-left-span2'>CA | 750 ml</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$31</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Irish Guinness

                              <br />
                             <p className='today-left-span2'>IE | 750 ml</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$26</p>
                           </div>
                        </div>
                    </div>
                    <div className="today-img">
                    <img src={todayImg} alt=""/>
                    </div>
                    <div className="today-left">
                    <div className="today-left-text">
                            <h1 className='today-left-h1'>Cocktails</h1>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Aperol Spritz
                              <br />
                             <p className='today-left-span2'>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$20</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Dark 'N' Stormy

                              <br />
                             <p className='today-left-span2'>Dark rum | Ginger beer | Slice of lime. </p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$16</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Daiquiri

                              <br />
                             <p className='today-left-span2'>Rum | Citrus juice | Sugar</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$10</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Old Fashioned

                              <br />
                             <p className='today-left-span2'>Bourbon | Brown sugar | Angostura Bitters</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$10</p>
                           </div>
                        </div>
                        <div className="today-left-cont">
                           <div className='today-left-pr'>  
                            <p className='today-left-p2'>Negroni
                              <br />
                             <p className='today-left-span2'>Gin | Sweet Vermouth | Campari | Orange garnish</p>
                            </p>
                            <div className="line"></div>
                              <p className='today-left-price'>$26</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="today-btn">
                <button className="banner-text-button">View More</button>
                </div>
            </div>
        </div>
    )
}

export default Today
