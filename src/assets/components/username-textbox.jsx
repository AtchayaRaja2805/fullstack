import '/Users/atchayaraja/frontend/src/assets/css/login.css'
function Username()
{
    return(
        <div>
            <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" required />
              </div>
        </div>
    )
}
export default Username