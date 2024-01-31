import '/Users/atchayaraja/frontend/src/assets/css/login.css'
function ConfirmPassword()
{
    return(
        <div>
            <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Confirm Password" required/>
              </div>
        </div>
    )
}
export default ConfirmPassword