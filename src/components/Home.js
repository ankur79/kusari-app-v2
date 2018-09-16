import React from "react";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="page-header">
                    Welcome Nirav!
                </h1>
                <div className="row">
                    <div className="col-xs-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
                            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                            amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a className="btn btn-default" href="#" role="button">View details »</a>
                        </p>
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
                            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                            amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a className="btn btn-default" href="#" role="button">View details »</a>
                        </p>
                    </div>

                    <div className="col-xs-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
                            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                            amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a className="btn btn-default" href="#" role="button">View details »</a>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;