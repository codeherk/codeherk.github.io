import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"


class Header extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props)
    this.state = {
      expanded: false
    }
  }

  componentDidMount(){
    this.setState({expanded: false});
    // console.log(this.state);
  }
  expandNav = function() {
    this.setState(prevState => {
      return { expanded: !prevState.expanded}
    })
    // console.log(this.state);
    // if(this.state.expanded){
    //   menu.classList.remove("menu-expanded");
    // }else{
    //   menu.classList.add("menu-expanded");
    // }
  }
  

  render(){
    let menuClasses = (this.state.expanded ? ` ${headerStyles.navExpanded}`: '')
    let menuLinks = this.props.menuLinks
    return (
      <div className={headerStyles.header}>
        <nav className={menuClasses}>
          <button onClick={() => this.expandNav()}>
            {/* <FontAwesomeIcon icon={faHamburger} /> */}
            <svg viewBox="0 0 100 80" width="30" height="30">
              <rect width="100" height="15"></rect>
              <rect y="30" width="100" height="15"></rect>
              <rect y="60" width="100" height="15"></rect>
            </svg>  
          </button>
          <Link to="/" className={headerStyles.brandLink}>
            <span>CODE</span>
            <span>HERK</span>
          </Link>
          <div className={headerStyles.menu}>
            {menuLinks.map((props, idx) => (
                <Link key={idx} to={props.link} className={headerStyles.menuLinks}>{props.name}</Link>
            ))}
          </div>
        </nav>
        {((this.props.showSocials != null) ? this.props.showSocials : true ) && 
        <div className={headerStyles.social}>
          
          <a className={headerStyles.hvrBob} href="https://instagram.com/codeherk">
            <svg xmlns="http://www.w3.org/2000/svg" width="54.475" height="54.463" viewBox="0 0 54.475 54.463"><path d="M27.169,45.093A13.964,13.964,0,1,0,41.132,59.057,13.942,13.942,0,0,0,27.169,45.093Zm0,23.042a9.078,9.078,0,1,1,9.078-9.078,9.095,9.095,0,0,1-9.078,9.078ZM44.961,44.522A3.257,3.257,0,1,1,41.7,41.265,3.249,3.249,0,0,1,44.961,44.522Zm9.248,3.306c-.207-4.363-1.2-8.228-4.4-11.412s-7.049-4.181-11.412-4.4c-4.5-.255-17.974-.255-22.471,0-4.351.207-8.215,1.2-11.412,4.387S.335,43.452.116,47.815c-.255,4.5-.255,17.974,0,22.471.207,4.363,1.2,8.228,4.4,11.412s7.049,4.181,11.412,4.4c4.5.255,17.974.255,22.471,0,4.363-.207,8.228-1.2,11.412-4.4s4.181-7.049,4.4-11.412c.255-4.5.255-17.962,0-22.459ZM48.4,75.111a9.191,9.191,0,0,1-5.177,5.177c-3.585,1.422-12.092,1.094-16.054,1.094s-12.481.316-16.054-1.094a9.191,9.191,0,0,1-5.177-5.177C4.516,71.526,4.844,63.018,4.844,59.057S4.528,46.576,5.938,43a9.191,9.191,0,0,1,5.177-5.177C14.7,36.4,23.207,36.732,27.169,36.732s12.481-.316,16.054,1.094A9.191,9.191,0,0,1,48.4,43c1.422,3.585,1.094,12.092,1.094,16.054S49.822,71.538,48.4,75.111Z" transform="translate(0.075 -31.825)"/></svg>
          </a>
          <a className={headerStyles.hvrBob} href="https://twitter.com/codeherk">
            <svg xmlns="http://www.w3.org/2000/svg" width="62.223" height="50.536" viewBox="0 0 62.223 50.536"><path d="M55.827,60.677c.04.553.04,1.106.04,1.658,0,16.859-12.831,36.283-36.283,36.283A36.037,36.037,0,0,1,0,92.894a26.381,26.381,0,0,0,3.08.158A25.54,25.54,0,0,0,18.912,87.6,12.775,12.775,0,0,1,6.988,78.759a16.082,16.082,0,0,0,2.408.2,13.488,13.488,0,0,0,3.356-.434A12.754,12.754,0,0,1,2.527,66.007v-.158a12.843,12.843,0,0,0,5.764,1.619A12.772,12.772,0,0,1,4.343,50.411,36.249,36.249,0,0,0,30.637,63.756a14.4,14.4,0,0,1-.316-2.922,12.765,12.765,0,0,1,22.07-8.725,25.107,25.107,0,0,0,8.094-3.08,12.718,12.718,0,0,1-5.606,7.028,25.565,25.565,0,0,0,7.344-1.974,27.413,27.413,0,0,1-6.4,6.593Z" transform="translate(0 -48.082)"/></svg>
          </a>
          <a className={headerStyles.hvrBob} href="https://linkedin.com/in/byron-jenkins">
            <svg xmlns="http://www.w3.org/2000/svg" width="54.445" height="54.445" viewBox="0 0 54.445 54.445"><path d="M50.556,32H3.877A3.906,3.906,0,0,0,0,35.925V82.52a3.906,3.906,0,0,0,3.877,3.925H50.556a3.916,3.916,0,0,0,3.889-3.925V35.925A3.916,3.916,0,0,0,50.556,32Zm-34.1,46.667H8.386V52.684h8.082V78.667ZM12.42,49.136A4.679,4.679,0,1,1,17.1,44.457,4.681,4.681,0,0,1,12.42,49.136ZM46.7,78.667h-8.07V66.028c0-3.014-.061-6.891-4.193-6.891-4.2,0-4.849,3.281-4.849,6.672V78.667h-8.07V52.684h7.741v3.549h.109a8.5,8.5,0,0,1,7.644-4.193c8.167,0,9.686,5.384,9.686,12.384Z" transform="translate(0 -32)"/></svg>
          </a>
          <a className={headerStyles.hvrBob} href="https://github.com/codeherk/">
            <svg xmlns="http://www.w3.org/2000/svg" width="60.278" height="58.772" viewBox="0 0 60.278 58.772"><path d="M20.162,55.323c0,.243-.28.438-.632.438-.4.036-.681-.158-.681-.438,0-.243.28-.438.632-.438C19.846,54.849,20.162,55.044,20.162,55.323Zm-3.78-.547c-.085.243.158.523.523.6a.57.57,0,0,0,.753-.243c.073-.243-.158-.523-.523-.632a.624.624,0,0,0-.753.28Zm5.372-.207c-.352.085-.6.316-.559.6.036.243.352.4.717.316s.6-.316.559-.559S22.106,54.534,21.754,54.57ZM29.75,8C12.894,8,0,20.8,0,37.653a30.469,30.469,0,0,0,20.6,29.07c1.556.28,2.1-.681,2.1-1.471,0-.753-.036-4.91-.036-7.462,0,0-8.507,1.823-10.294-3.622,0,0-1.385-3.536-3.379-4.448,0,0-2.783-1.908.194-1.872a6.415,6.415,0,0,1,4.691,3.135c2.661,4.691,7.122,3.342,8.859,2.54a6.755,6.755,0,0,1,1.944-4.1C17.889,48.676,11.035,47.691,11.035,36A9.21,9.21,0,0,1,13.9,28.842a11.482,11.482,0,0,1,.316-8.252c2.54-.79,8.386,3.281,8.386,3.281a28.71,28.71,0,0,1,15.264,0s5.846-4.083,8.386-3.281a11.477,11.477,0,0,1,.316,8.252c1.944,2.151,3.135,3.828,3.135,7.158,0,11.728-7.158,12.663-13.952,13.429,1.118.96,2.066,2.783,2.066,5.639,0,4.1-.036,9.163-.036,10.16,0,.79.559,1.75,2.1,1.47,12.153-4.035,20.393-15.568,20.393-29.045C60.278,20.8,46.606,8,29.75,8ZM11.813,49.915c-.158.122-.122.4.085.632.194.194.474.28.632.122.158-.122.122-.4-.085-.632C12.25,49.842,11.971,49.757,11.813,49.915ZM10.5,48.931c-.085.158.036.352.28.474a.362.362,0,0,0,.523-.085c.085-.158-.036-.352-.28-.474C10.78,48.773,10.585,48.809,10.5,48.931Zm3.938,4.326c-.194.158-.122.523.158.753.28.28.632.316.79.122.158-.158.085-.523-.158-.753C14.96,53.1,14.6,53.063,14.438,53.257Zm-1.385-1.786c-.194.122-.194.438,0,.717s.523.4.681.28a.554.554,0,0,0,0-.753c-.17-.28-.486-.4-.681-.243Z" transform="translate(0 -8)"/></svg>
          </a>
        </div>
        }
      </div>
    ) 
  }
}

export default Header;