import React from 'react';
// import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
// import UpdateCourse from './components/UpdateCourse';
// import CreateCourse from './components/CreateCourse';
import Header from './components/Header';

class App extends React.Component {

  state = {
    courses: []
  }

  componentDidMount () {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          courses: res,
        })
      })
  }
  render () {
    return (
      <React.Fragment>
      <Header />
        {/* <React.Fragment> */}
          <div>
            <UserSignUp />
          </div>
        {/* </React.Fragment> */}
      </React.Fragment>
      // <UserSignIn />
      // <UserSignUp />
      // <UpdateCourse />
      // <CreateCourse />

      // <div>
      //   {this.state.courses.map((courseObject, index) => 
      //   <ul key={index}>
      //     <li className="title">{courseObject.title}</li>
      //     <li>{courseObject.description}</li>
      //     {courseObject.estimatedTime ? <li>{courseObject.estimatedTime}</li> : null}
      //     {courseObject.materialsNeeded ? <li>{courseObject.materialsNeeded}</li> : null}
      //     <li>Professor: {`${courseObject.User.firstName} ${courseObject.User.lastName}`}</li>
      //     <li>Email: {courseObject.User.emailAddress}</li>
      //   </ul>
      //   )}
      // </div>
    )
  }

}

export default App;
