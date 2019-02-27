import React from 'react';
import './flash.scss';

export const Flash = () => {
    return (
      <div className="container cta-100 ">
        <div className="container">
          <div className="row blog">
            <div className="col-md-12">
              <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#blogCarousel" data-slide-to="0" className="active" />
                  <li data-target="#blogCarousel" data-slide-to="1" />
                </ol>
                {/* Carousel items */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                            {/* Date */}
                            <div className="item-box-blog-date bg-blue-ui white">
                              <span className="mon">Augu 01</span>
                            </div>
                            {/* Image */}
                            <figure>
                              <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg" />
                            </figure>
                          </div>
                          <div className="item-box-blog-body">
                            {/* Heading */}
                            <div className="item-box-blog-heading">
                              <a href="#" tabIndex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                            {/* Data */}
                            <div className="item-box-blog-data" style={{padding: 'px 15px'}}>
                              <p>
                                <i className="fa fa-user-o" /> Admin,
                                <i className="fa fa-comments-o" /> Comments(3)
                              </p>
                            </div>
                            {/* Text */}
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div className="mt">
                              <a href="#" tabIndex="0" className="btn bg-blue-ui white read">read more</a>
                            </div>
                            {/* Read More Button */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                            {/* Date */}
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">Augu 01</span> </div>
                            {/* Image */}
                            <figure> <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg" /> </figure>
                          </div>
                          <div className="item-box-blog-body">
                            {/* Heading */}
                            <div className="item-box-blog-heading">
                              <a href="#" tabIndex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                            {/* Data */}
                            <div className="item-box-blog-data" style={{padding: 'px 15px'}}>
                              <p><i className="fa fa-user-o" /> Admin, <i className="fa fa-comments-o" /> Comments(3)</p>
                            </div>
                            {/* Text */}
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div className="mt"> <a href="#" tabIndex="0" className="btn bg-blue-ui white read">read more</a> </div>
                            {/* Read More Button */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Row */}
                  </div>
                  {/* .carousel-inner */}
                </div>
                {/* .Carousel */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}