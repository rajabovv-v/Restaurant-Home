import React from "react";
import food1 from "../images/food1.png";
import food2 from "../images/food2.png";
import food3 from "../images/food3.png";




function Food() {
    return (
        <div className="food">
            <div className="container">
            <div className="people-text">
            <p className='people-p1'>Blogs</p>
            
            <svg width="40" height="9" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_513_51)">
              <path d="M33.5016 9C37.0849 9 40 6.98129 40 4.49995C40 2.01861 37.0849 0 33.5016 0C30.1122 0 27.3221 1.80637 27.03 4.1018H22.3529V3.1552L0 3.1552V5.84446L22.353 5.84446V4.89798H27.0301C27.3223 7.19352 30.1122 9 33.5016 9ZM21.4898 5.04839L0.863293 5.04839V3.95161L21.4898 3.95161V5.04839ZM27.8662 4.49995C27.8662 2.45778 30.3944 0.796403 33.5017 0.796403C36.6091 0.796403 39.1372 2.45778 39.1372 4.49995C39.1372 6.54222 36.6091 8.2037 33.5017 8.2037C30.3944 8.2037 27.8662 6.54222 27.8662 4.49995Z" fill="#DCCA87"/>
              </g>
              <defs>
              <clipPath id="clip0_513_51">
              <rect width="40" height="9" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              <h1 className="people-h1">Gerícht updates</h1>
             </div>
                <div className="food-row">
                  <div className="food-one">
                    <div className="food-img">
                      <a href="#" className="fd-img">
                      <img src={food1} alt="" />
                      </a>
                    </div>
                    <div className="food-p">
                      <p className="food-p-p1">16 Apr 2021</p>
                      <p className="food-p-p1">- Annalisa L</p>
                    </div>
                    <div className="food-texts">
                      <a href="#" className="food-texts-p1">Tips For Prepping and Caring For Your Grill</a>
                      <p className="food-texts-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                      <a className="food-texts-a" href="#">Read More</a>
                    </div>
                  </div>
                  <div className="food-one">
                    <div className="food-img" >
                      <a href="#" className="fd-img">
                      <img src={food2} alt="" />
                      </a>
                    </div>
                    <div className="food-p">
                      <p className="food-p-p1">23 May 2021</p>
                      <p className="food-p-p1">-John Micheal</p>
                    </div>
                    <div className="food-texts">
                      <a href="#" className="food-texts-p1">Summer Cocktails and Mocktails</a>
                      <p className="food-texts-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                      <a className="food-texts-a" href="#">Read More</a>
                    </div>
                  </div>
                  <div className="food-one">
                    <div className="food-img">
                      <a href="#" className="fd-img">
                      <img src={food3} alt="" />
                      </a>
                    </div>
                    <div className="food-p">
                      <p className="food-p-p1">06 Aug 2021</p>
                      <p className="food-p-p1">-Fred W</p>
                    </div>
                    <div className="food-texts">
                      <a href="#" className="food-texts-p1">Easy Cooking For College Students</a>
                      <p className="food-texts-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                      <a className="food-texts-a" href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="today-btn">
                <button className="banner-text-button">View More</button>
                </div>
            </div>
        </div>
    );
}
export default Food