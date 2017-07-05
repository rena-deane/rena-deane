import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import routeManager from 'services/routeManager';
import { checkIfTopicComplete, getAllTopics, goToTopic, getPrev } from '../../services/routeManager';

import styles from './Header.css';

const closeWindow = () => {
  if (window.self === window.top) {
    window.close();
  } else {
    window.parent.close();
  }
};

const createTopicLink = ({ topic }) => (
  <MenuItem
    className="topicMenuItem"
    key={topic}
    disabled={!checkIfTopicComplete(topic)}
    onClick={() => checkIfTopicComplete(topic) && goToTopic(topic)}
    style={{
      opacity: (checkIfTopicComplete(topic)) ? 1 : 0.5
    }}
  >
    {topic}
  </MenuItem>
);

createTopicLink.propTypes = {
  topic: React.PropTypes.string.isRequired,
};

const createLinks = () => {
  const topics = routeManager.getAllTopics();
  const links = topics.map(topic => createTopicLink({ topic }));

  return links;
};


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        { this.props.isHidden() ? null :
        <div>
          <Navbar fluid>
            <Navbar.Header>
              <Navbar.Brand>
                {
                  getPrev() ? (
                    <div className="nav-back-wrapper">
                      <img
                        className="nav-back"
                        src={BackImage}
                        role="presentation"
                        onClick={() => getPrev(true)}
                      />
                    </div>
                  ) : null }
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav className="nav-right">
                <NavItem
                  className="pull-right"
                  onClick={() => closeWindow()}
                  eventKey={3}
                  href="#"
                >
                  Exit
                </NavItem>
                <NavDropdown
                  className="pull-right topicDropDown"
                  eventKey={1}
                  title="Topics"
                  id="nav-dropdown"
                >
                  { createLinks() }
                </NavDropdown>
              </Nav>
              <span className="module-title">
                Lean
                <ProgressBar />
              </span>
            </Navbar.Collapse>
          </Navbar>
        </div>
        }
      </div>
    );
  }
}

Header.propTypes = {
  isHidden: React.PropTypes.func,
};

export default Header;
