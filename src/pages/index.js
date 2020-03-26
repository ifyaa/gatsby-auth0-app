import React from "react"
import { Link } from "gatsby"
require('dotenv').config();

export default () => (
  <div>
    <p>Hello world!</p>
    <Link to="/account/">Go to your account</Link>
  </div>
)
