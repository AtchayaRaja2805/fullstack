import '/Users/atchayaraja/frontend/src/assets/css/login.css'
function EmailId()
{
    return(
        <div>
           <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" required/>
              </div>
        </div>
    )
}
export default EmailId