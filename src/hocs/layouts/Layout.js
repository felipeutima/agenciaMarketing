import {connect} from "react-redux"

function Layout ({children}){
    return(
        <div>
            {children}
        </div>
    )

}

const mapStateToProp = state =>  ({ //llama las variables de redux que quiero llamar

})
export default connect(mapStateToProp,{


})(Layout)