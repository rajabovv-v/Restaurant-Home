import React from 'react'
import peopleOne from '../images/peopleOne.png'
import peopleTwo from '../images/peopleTwo.png'
import peopleThree from '../images/peopleThree.png'
import peopleFour from '../images/peopleFour.png'



function People() {
  return (
    <div className="people">
      <div className="container">
        <div className="people-row">
          <div className="people-text">
            <p className='people-p1'>Testimony</p>
            
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
              <h1 className="people-h1">Happy customers</h1>
          </div>
          <div className="people-cont">
            <div className="people-left">
              <div className="people-one">
                <div className="people-img">
                  <img src={peopleOne} alt="" />
                </div>
                <div className="people-text1">
                  <p className='people-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                  <h1 className='people-h2'>Wade Warren</h1>
                  <p className='people-p3'>Sommelier</p>
                </div>
              </div>
              <div className="people-one">
              <div className="people-img">
                  <img src={peopleTwo} alt="" />
                </div>
                <div className="people-text1">
                  <p className='people-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                  <h1 className='people-h2'>Jane Cooper</h1>
                  <p className='people-p3'>Chef</p>
                </div>
              </div>
            </div>
            <div className="people-right">
            <div className="people-one">
                <div className="people-img">
                  <img src={peopleFour} alt="" />
                </div>
                <div className="people-text1">
                  <p className='people-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                  <h1 className='people-h2'>Robert Fox</h1>
                  <p className='people-p3'>Chef</p>
                </div>
              </div>
              <div className="people-one">
              <div className="people-img">
                  <img src={peopleThree} alt="" />
                </div>
                <div className="people-text1">
                  <p className='people-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                  <h1 className='people-h2'>Brooklyn Simmons</h1>
                  <p className='people-p3'>Caterer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default People