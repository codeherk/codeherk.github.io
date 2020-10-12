import React from "react"
import styles from "./footer.module.scss"

export default function Footer(props){
    return (

        <footer>
            {/* <h3 className={styles.contactTitle}>Connect with me</h3> */}
    {/* <section className={styles.contact}>
      <ul>
        
          <li><a href="https://twitter.com/codeherk" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        
        
          <li><a href="https://instagram.com/codeherk" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        
        
          <li class="github"><a href="http://github.com/codeherk" target="_blank"><i class="fa fa-github"></i></a></li>
        
        
          <li class="linkedin"><a href="https://in.linkedin.com/in/byron-jenkins" target="_blank"><i class="fa fa-linkedin"></i></a></li>
        
        
          <li class="email"><a href="mailto:byronjjenkins@gmail.com"><i class="fa fa-envelope-o"></i></a></li>
        
      </ul>
    </section> */}
    <div className={styles.copyright}>
      <p>2020 © Byron Jenkins</p>
    </div>
  </footer>
  )
}