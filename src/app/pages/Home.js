import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Navbar, Table, Header, Pagination, Loader } from "../components";

// Return all the data corresponding to current page
const getCurrentPageData = (nextProps) => {
  let { pageIndex, entitiesPerPage, allUsers, totalPages, currentPageData } = nextProps;
  if (totalPages === 0){
    totalPages = Math.ceil(allUsers.length / entitiesPerPage);
  }
  let endPoint = pageIndex*entitiesPerPage;
  let beginPoint = endPoint - entitiesPerPage;
  currentPageData = allUsers.slice(beginPoint, endPoint);
  return { pageIndex, entitiesPerPage, allUsers, totalPages, currentPageData };
} 

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {}; // Initializing empty component state
  }

  // Set the default and changing component state
  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.allUsers !== prevState.allUsers) {
      return {
        loading: nextProps.loading,
        query: nextProps.query,
        ...getCurrentPageData(nextProps)
      };
    }
    return null;
  }   

  componentDidMount = () => this.props.fetchUsers();

  // Decide wether to re-render the component or not on basis of state changes
  shouldComponentUpdate = (nextProps, nextState) => {   
    if (nextState !== this.state) {
      return true;
    } 
    return false;
  }

  // Updete query state on input change
  onSearch = query => this.setState({query});

  // Invokes on changing the page and set new data for current page
  onClickPage = (pageIndex) => {
    this.setState({
      pageIndex
    },() => this.setState({
        ...getCurrentPageData(this.state)
      }))
  }

  // Invokes when previous or next button is clicked
  onClickPrevNext = buttonType => {
    if (buttonType === "next") {
      this.setState(prevState => {
        pageIndex: ++prevState.pageIndex
      },() => this.setState({
        ...getCurrentPageData(this.state)
      }));
    } else{
      this.setState(prevState => {
        pageIndex: --prevState.pageIndex
      },() => this.setState({
        ...getCurrentPageData(this.state)
      }));
    }
  }

  // Invokes when user is clicked from the list and send data to user page
  viewUser = user => {
    this.props.history.push({
      pathname: "/user",
      data: {user}
    })
  }
  
  render = () => {
    let { currentPageData, totalPages, pageIndex, loading, entitiesPerPage, query } = this.state;
    if (loading) {
      return <Loader />
    }
    return(
      <Fragment>
        <Header onSearch={this.onSearch} />
        <Navbar />
        <main role="main" className="col-md-9 offset-md-1">
          {
            currentPageData &&
              <Table usersList={currentPageData} query={query} viewUser={this.viewUser} entitiesPerPage={entitiesPerPage} />
          }
          <Pagination 
            totalPages={totalPages} 
            pageIndex={pageIndex} 
            onClickPage={this.onClickPage} 
            onClickPrevNext={this.onClickPrevNext} 
          />
        </main>
      </Fragment>
    )
  }
}

const mapStateToProps = ({home}) => ({ ...home })

export default withRouter(connect(mapStateToProps,{
  fetchUsers
})(Home));