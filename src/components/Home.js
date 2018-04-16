import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { request } from "../actions";
import Person from "./Person";

class Home extends React.Component {
    componentDidMount() {
        this.props.request();
    }

    person(person) {
        return(<Person person={person}/>);
    }

    render() {
        let people = this.props.response.results;
        return people
            ? <h1>
                {people.map(this.person)}
            </h1>
            : <h1>loading...</h1>;
    }
}

const mapStateToProps = state => ({ response: state.response });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ request }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);