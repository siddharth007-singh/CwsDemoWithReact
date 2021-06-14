import React from 'react';

function VideoStream(){
    return(
        <React.Fragment>
              <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="list-group">
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                            <div className="list-group-item list-group-item-action">Module</div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
             </div>  
        </React.Fragment>
    );
}

export default VideoStream;