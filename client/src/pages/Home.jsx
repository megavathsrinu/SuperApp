import Banner from '../components/Home/Banner';
import SignUpFrom from '../components/Home/SignUp';

const Home = ()=>{
    return(
        <div style={{display:"flex"}}>
        <Banner/>
        <SignUpFrom/>
        </div>
    )
}

export default Home