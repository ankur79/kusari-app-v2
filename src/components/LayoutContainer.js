import React from 'react';
import SideNav from './SideNav';
class LayoutContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <SideNav/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}

export default LayoutContainer;