import Card from "./common/Card"
import Constants from "./common/Constants"

export const ContactUs = () => {
    return(
        <div className="container">
            <Card email={Constants.VIVEK_EMAIL} mobileNumber={Constants.MOBILE} />
        </div>
    )
}