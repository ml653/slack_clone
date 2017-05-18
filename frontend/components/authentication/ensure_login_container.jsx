// import React from 'react'
// import connect from 'react-redux'
//
// class EnsureLoggedInContainer extends React.Component {
//
//   componentDidMount() {
//     const { isLoggedIn, url } = this.props
//
//     if (!this.props.isLoggedIn) {
//       // set the current url/path for future redirection (we use a Redux action)
//       // then redirect (we use a React Router method)
//
//       // dispatch(setRedirectUrl(currentURL)) TODO: different now
//       this.props.history.push('/login')
//     }
//   }
//
//   render() {
//     if (this.props.isLoggedIn) {
//       return this.props.children
//     }
//     return null
//   }
// }
//
//
// function isEmpty(obj) {
//   return (Object.getOwnPropertyNames(obj).length === 0);
// }
//
// // Grab a reference to the current URL. If this is a web app and you are
// // using React Router, you can use `ownProps` to find the URL. Other
// // platforms (Native) or routing libraries have similar ways to find
// // the current position in the app.
// function mapStateToProps(state, ownProps) {
//   return {
//     isLoggedIn: isEmpty(state.session),
//     url: ownProps.location.pathmame
//   }
// }
//
// export default connect(mapStateToProps, {})(EnsureLoggedInContainer)
