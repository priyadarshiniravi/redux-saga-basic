import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { request } from "../actions";

class Home extends React.Component {
    componentDidMount() {
        this.props.request();
    }

    person = (x, i) =>
        <div key={x.id.value}>
            <h1>Profile Info</h1>
            <p>
                Gender: {x.gender}
            </p>
            <p>
                Name: {x.name.first} {x.name.last}
            </p>
        </div>;

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