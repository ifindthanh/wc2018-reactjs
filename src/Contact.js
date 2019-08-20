import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      if (this.props.active) {
        return (
          <article id="contact">
            <h2 class="major">Contact</h2>
            <form method="post" action="#">
              <div class="fields">
                <div class="field half">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div class="field half">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div class="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li><input type="submit" value="Send Message" class="primary" /></li>
                <li><input type="reset" value="Reset" /></li>
              </ul>
            </form>
            <ul class="icons">
              <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
            </ul>
          </article>
        );
      } else {

        return (
          <article id="contact" class="hidden">

          </article>
      );
    }

    }
}
export default Contact;
