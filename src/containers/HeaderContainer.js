import Header from '../components/Header'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.cardItems
})

export default connect(mapStateToProps)(Header)
// export default Home;