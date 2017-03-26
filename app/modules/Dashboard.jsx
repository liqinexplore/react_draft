import React from 'react';
import ReactDOM from 'react-dom';
import {Link, IndexLink} from 'react-router';
import 'resources/system.less';
class Dashboard extends React.Component {
    render() {
        return (
            <div>
              <div>
                <h1>Dashboard</h1>

                <Link to='/circle'>
                    跳转
                </Link>

                <IndexLink to="/" activeClassName="active">
                    Home
                </IndexLink>
              </div>
                <div className="system_content">
                    {this.props.children}
                </div>
          </div>
        )

    }
}
module.exports = Dashboard;
