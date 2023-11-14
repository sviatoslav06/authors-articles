import { STIVEN } from "../articles-mock"
import './Home.css';
import Like from './Like';
// import like from '../images/like.png';
// import plike from '../images/plike.png';
// import dislike from '../images/dislike.png';
// import pdislike from '../images/pdislike.png';

function Home() {
    return (
        <div className="main">
            <h1>{STIVEN.author}</h1>
            <div>
                <div className="description">
                    <div>
                        <p>{STIVEN.author} - {STIVEN.description}</p>
                    </div>
                    <div>
                        <img src={STIVEN.img} alt="Stiven King" />
                    </div>
                </div>
                <div>
                    <h3>Життєпис</h3>

                    <hr />

                    <h5>Ранні роки</h5>
                    <p>{STIVEN.early_years}</p>

                    <h5>Прихід слави</h5>
                    <p>{STIVEN.slava}</p>

                    <h5>Проблеми з алкоголем</h5>
                    <p>{STIVEN.alcohol}</p>

                    <h5>Автомобільна аварія</h5>
                    <p>{STIVEN.car}</p>

                    <h5>Нагороди та відзнаки</h5>
                    <p>{STIVEN.revards}</p>

                    <h5>Активізм</h5>
                    <p>{STIVEN.activity}</p>
                </div>
                <Like />
                {/* <div>
                    <button><img src={like} alt="like" /></button>
                    <button><img src={dislike} alt="like" /></button>
                </div> */}
            </div>
        </div >
    );
}

export default Home;